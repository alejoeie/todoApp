const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});
const app = require('./index');

const DB = process.env.DATABASE;

try{
  mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  console.log("Successfully connected");
}catch(err){
  console.log("Cannot access to the database");
}



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})



