const contactHandler = (req,res)=>{
    const contactDetails = {result:[{Email:'abc@abc.com'},{phone:'1234567890'},{address:'Noida'}]}
    console.log(req.cookies);
    return res.status(200).json(contactDetails)
}

module.exports = contactHandler