const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    username: {
        type: String,
        lowercase: true
    },
    bio: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER'
    },
    avatar: {
        type: String,
        trim: true,
        default: '../images/user.png'
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    }
},{
    timestamps: {}
});

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} );
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error('Invalid login credentials');
    }

    return user;
}

userSchema.statics.emailExists = async (email) => {
    // Search for a user by email.
    const user = await User.findOne({ email} );
    if (!user) {
        return false;
    }

    return true;
}

userSchema.statics.findByPk = async (pk) => {
    // Serach for a user by id.
    const user = await User.findById(pk).populate(['city', 'state']);
    
    if (!user) {
        throw new Error({ error: 'User not found' });
    }

    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;