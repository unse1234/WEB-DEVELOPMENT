const jwt = require("jsonwebtoken")


function identifyUser(req,res,next){

    let decodedTokenId = null;
      try {
        decodedTokenId = jwt.verify(req.cookies.JWT_Token, process.env.jwt_secret).id;
      } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
      }
        req.userId=decodedTokenId;
        next();
    }

    module.exports=identifyUser;
