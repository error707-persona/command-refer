const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name:'String',
  email:'String',
  bank:'String',
  accountno:{
    type:String,
    default:'false'
  },
  balance:'String',
},{timestamps:true})


const NotesModel = mongoose.model('users', schema);
module.exports = NotesModel;


