const jwt = require('jsonwebtoken')

const authentication = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        if(!token){
            throw new Error("Invalid Authentication");
        }
        jwt.verify(token, process.env.Access_Token, (error, user) =>{
            if(error){
                throw new Error("Invalid Authentication");
            }
            req.user = user
            next()
        })
    } catch (error) {
        throw new Error({msg : error.message});
    }
}



module.exports = authentication