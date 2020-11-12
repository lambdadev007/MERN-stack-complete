const User = require('../models/User');
const { ApolloError } = require("apollo-server-express");

const register = async function ({ name, email, password }) {
    console.log('[register]');

    try {
        const user = new User({name, email, password});
        await user.save();
        const token = await user.generateAuthToken();
        
        return token;
    } catch (error) {
        throw new ApolloError(error);
    }
};

const login = async function ({ email, password }) {
    console.log('[login]');

    try {
        const user = await User.findByCredentials(email, password);
        if (!user) {
            throw new ApolloError('Login failed! Check authentication credentials');
        }
        const token = await user.generateAuthToken();
        
        return token;
    } catch (error) {
        throw new ApolloError('Login failed! Check authentication credentials');
    }
}

const user = async function (req, res) {
    console.log('[user]');

    res.send(req.user);
}

const logout = async function (req, res) {
    console.log('[logout]');

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        })
        await req.user.save();
        res.send({
            "status": "success"
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const logout_all = async function (req, res) {
    console.log('[logout all]');

    try {
        req.user.tokens.splice(0, req.user.tokens.length);
        await req.user.save();
        res.send({
            "status": "success"
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const emailExists = async function (email) {
    try {
        console.log('[email]', email);
        const emailExists = await User.findByEmail(email);
        console.log('[emailExists]', emailExists);
        if (emailExists) {
            return true;
        }
        
        return false;
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { register, login, user, logout, logout_all, emailExists };