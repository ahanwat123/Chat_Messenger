const jwt = require('jsonwebtoken')

module.export.authMiddleware =async(req, res, next)=>{
    const {authToken} = req.cookies;
    if(authToken){
        const deCodeToken = await jwt.verify(authToken, process.env.SECRET)
        req.myID = deCodeToken.id;
        next();
    
    
    
    }
    else{
        res.status(400).json({
            error:{
                errorMessage:['please Login First']
            }
        })
    }
}