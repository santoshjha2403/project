const aboutHandler = async (req,res)=>{
   
    const finalData = {result:[{name:'website'},{author:'santosh jha'},{role:'developer'},{purpose:'practice'},{route:'about section'}]}

    return res.status(200).json(finalData)
}

module.exports = aboutHandler