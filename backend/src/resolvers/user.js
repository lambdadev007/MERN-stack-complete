// const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
const randomize = require('randomatic');
const { ApolloError, AuthenticationError, ForbiddenError } = require("apollo-server-express");
const { logout_all } = require("../controllers/userController");
const cloudinary = require('cloudinary').v2;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
    Query: {
        async me(parent, args, { models, authUser }) {
            console.log('[me]');
            if(!authUser)
                throw new ForbiddenError('Not authorized');

            return authUser.user;
        }
    },
    Mutation: {
        async signUp(parent, { name, email, password }, { models }) {
            console.log('[register]');

            try {
                const userExists = await models.User.emailExists(email);

                if(userExists) {
                    throw new ApolloError('Email already in use.');
                }

                const user = new models.User({name: name, email: email, password: password});
                await user.save();
                // const token = await user.generateAuthToken();

                const pin = randomize('0', 6);

                const verifyToken = new models.Token({_userId: user._id, token: pin});
                await verifyToken.save();

                // let testAccount = await nodemailer.createTestAccount();

                // let transporter = nodemailer.createTransport({
                //   host: "smtp.ethereal.email",
                //   port: 587,
                //   secure: false, // true for 465, false for other ports
                //   auth: {
                //     user: testAccount.user,
                //     pass: testAccount.pass,
                //   },
                // });



                const msg = {
                    from: '"Wineclub" <elias@holamicasa.com>',
                    to: email,
                    subject: "Email verification",
                    html: "<p>Thanks for signing up, please use below pin code to verify your email address</p> <p>"+ pin +"</p>"
                };

                const info = await sgMail.send(msg);

                console.log("[pin]", pin);
                // console.log("[Preview URL]", nodemailer.getTestMessageUrl(info));
                
                return "success";

            } catch (error) {
                throw new ApolloError(error);
            }
        },
        async verifyEmail(parent, { pin }, { models }) {
            const pinInfo = await models.Token.findOne({token: pin});

            if(!pinInfo) {
                throw new ApolloError("Pin not found or expired");
            }

            const user = await models.User.findOne({_id: pinInfo._userId});

            if(!user) {
                throw new ApolloError("User not found");
            }

            console.log('[user]', user);
            await user.updateOne({isVerified: true});
            const token = await user.generateAuthToken();
            pinInfo.remove();

            return { token };
        },
        async pinResend(parent, { email }, { models }) {
            const user = await models.User.findOne({email: email});

            if(!user) {
                throw new ApolloError("Not found a user with the email address");
            }

            const oldPin = await models.Token.findOne({_userId: user._id});
            if(oldPin) oldPin.remove();

            const pin = randomize('0', 6);
            const verifyToken = new models.Token({_userId: user._id, token: pin});
            await verifyToken.save();

            const msg = {
                from: '"Wineclub" <elias@holamicasa.com>',
                to: email,
                subject: "Email verification",
                html: "<p>Thanks for signing up, please use below pin code to verify your email address</p> <p>"+ pin +"</p>"
            };

            const info = await sgMail.send(msg);
            
            console.log('[pin]', pin);

            return "success";
        },
        async signIn(parent, { email, password }, { models }) {
            console.log('[login]');

            try {
                const user = await models.User.findByCredentials(email, password);
                if (!user) {
                    throw new AuthenticationError('invalid email/password');
                }

                if(!user.isVerified) {
                    throw new AuthenticationError('email is not verified');
                }
                
                const token = await user.generateAuthToken();
                
                return { token };

            } catch (error) {
                console.log('[error]', error);
                throw new AuthenticationError(error);
            }
        },
        async logOut(parent, args, { models, authUser }) {
            console.log('[logout]', authUser);

            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }

            try {
                authUser.user.tokens = authUser.user.tokens.filter((token) => {
                    return token.token != authUser.token;
                });
                await authUser.user.save();
                
                return true;
            } catch (error) {
                throw new AuthenticationError(error);
            }
        },
        async logOutAll(parent, args, { models, authUser }) {
            console.log('[logout all]', authUser);

            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }

            try {
                authUser.user.tokens.splice(0, authUser.user.tokens.length);
                await authUser.user.save();
                
                return true;
            } catch (error) {
                throw new AuthenticationError(error);
            }
        },
        async uploadAvatar(parent, { avatar }, { models, authUser }) {
            const { createReadStream } = await avatar;
            console.log('[uploadAvatar]', createReadStream().pipe);

            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }
            
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET
            });

            try {
                const result = await new Promise((resolve, reject) => {
                    createReadStream().pipe(
                        cloudinary.uploader.upload_stream((error, result) => {
                            if (error) {
                                reject(error);
                            }
    
                            resolve(result);
                        })
                    )
                });

                await authUser.user.updateOne({ avatar: result.secure_url });
                return authUser.user;
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        async updateUser(parent, { username, bio, city, state, favState, favRegion }, { models, authUser }) {
            console.log('[Update user]');

            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }

            await authUser.user.updateOne({ username: username, bio: bio, city: city, state: state });

            if(favState) {
                const favoriteState = new models.FavoriteState({ user: authUser.user._id, state: favState });
                await favoriteState.save();
            }

            if(favRegion) {
                const favoriteRegion = new models.FavoriteRegion({ user: authUser.user._id, region: favRegion });
                await favoriteRegion.save();
            }

            return authUser.user;
        }
    }
}