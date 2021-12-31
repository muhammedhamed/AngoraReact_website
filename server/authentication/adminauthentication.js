const User = require('../models/User')

const adminauthentication = async (req, res, next) =>{
    try {
        const user = await User.findOne({
            _id: req.user.id
        })
        if(user.role === "user")
            throw new Error("Access denied");

        next()
        
    } catch (error) {
        return res.json({msg: error.message})
    }
}

module.exports = adminauthentication


