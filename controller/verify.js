const jwt = require('jsonwebtoken')
function verifyUser(req, res){
    const token = req.headers['authorization']?.split(' ')[1] || '';
    const secreat = 'santoshhhh';
    try{
        const decoded = jwt.verify(token, secreat);
        res.status(200).json({
            data: decoded
        })
    }catch(error){
        res.status(401).json({
            message: 'Not authoriozed'
        })
    }
}
module.exports = verifyUser;