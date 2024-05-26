const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
require('./config/dbconfig');
const PORT = process.env.PORT || 8080;

const formRouter = require('./router/formRoutes');
app.use('/POST', formRouter);

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`server is started on port ${PORT}`);
});