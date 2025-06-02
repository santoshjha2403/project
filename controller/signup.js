const userModel = require('../model/user');

const createUser = async(req,res)=>{
    let {name,email,jobtitle,gender}= req.body;
    let createuser = await userModel.create({
        name:name,
        email:email,
        jobtitle:jobtitle,
        gender:gender
    });
    console.log('new user created');
    
    return res.status(201).json(createuser)
}

module.exports = createUser;