const jwt = require('jsonwebtoken');
const { ForbiddenError } = require("apollo-server-express");
const User = require('../models/User');

const auth = async(req, res, next) => {
    let token = '';
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];

    if(!token) {
        return null;
    }
        
    try {
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });
        if (!user) {
            throw new ForbiddenError('Not authroized');
        }
        req.user = user;
        req.token = token;
        
        
    } catch (error) {
        throw new ForbiddenError('Not authroized');
    }

}

module.exports = auth;