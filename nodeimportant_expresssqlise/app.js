const express = require('express')
const custumerRoute = require('./routers/custumer');
const parser = require('body-parser');
const app = express();
app.use(parser.urlencoded({extended:true}));
app.use("/api",custumerRoute)

app.listen(80)
