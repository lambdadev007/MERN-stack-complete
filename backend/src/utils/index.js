const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getAuthUser = async req => {
    // Authorization: Bearer jskdckwemcksdc.sdfdsfsdofmsmsdcsd
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];

    if(!token) {
        return null;
    }

    try {
        const data = jwt.verify(token, process.env.JWT_KEY);
        
        if(!data) {
            return null;
        }

        const user = await User.findOne({ _id: data._id, 'tokens.token': token }).populate(['city', 'state']);
        // console.log('[getAuthUser]', token);
        if(!user) {
            return null;
        }

        req.token = token;

        return {token, user};
    } catch (error) {
        // throw new Error(error);
        return null;
    }
}

module.exports = { getAuthUser };