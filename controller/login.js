
function JwtToken(req, res){
    const jwt = require('jsonwebtoken');
    const payload = {
        name:'santosh'
    }
    const secreat = 'santoshhhh';
    const token = jwt.sign(payload, secreat, {
        expiresIn:'1h'
    })
    console.log(token);
    
    return res.status(200).json({token})
}

module.exports = JwtToken