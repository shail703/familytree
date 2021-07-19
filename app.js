const express = require('express');
const helmet = require('helmet');
const app = express();
const userRouter=require('./routes/user.routes');

app.use(helmet());
app.use('/api/v1/familytree',userRouter);
module.exports = app;