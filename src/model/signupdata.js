//accessing mongoose package
const mongoose = require('mongoose');

//database connection
 
mongoose.connect('mongodb://localhost:27017/library');
// schema definition
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
username:String,
email:String,
password:String,




});


//model creation
 var Signupdata=mongoose.model('signupdata',SignupSchema);


 module.exports = Signupdata;