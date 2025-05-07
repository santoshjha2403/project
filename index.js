const express = require ("express");
const apiRoutes = require('./routes/apis')
const port = 3000

const app = express()
app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(port,()=>{
    console.log(`listening on port number ${port}`);    
})