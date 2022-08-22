const express = require("express");
const cors=require('cors')
const routes=require('./routes/routes')
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/',routes)
app.listen(PORT, () => {
  console.log(`server running at 127.0.0.1:${PORT}`);
});
