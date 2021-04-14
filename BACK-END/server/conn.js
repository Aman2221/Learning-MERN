const mongoose = require('mongoose');

const conn_url = process.env.DATABASE_URL;
mongoose.connect(conn_url,{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex : true, useFindAndModify : false })
.then(() => {
    console.log('Database connected');
})
.catch((e) => {
    console.log(e.message);
})