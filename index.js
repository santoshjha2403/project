const express = require("express");
const apiRoutes = require('./routes/apis');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cluster = require('cluster');
const os = require('os')
const osCount = os.cpus().length;

const port = 3000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`listening on port number ${port} from ${process.pid}`);
})
