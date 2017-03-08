import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  "name": String,
  "username": String,
  "email": String,
  "created_at": Date,
  "password": String,
  "adress": String,
  "type": String,
  "plan_id": Number,
  "isdeleted": Boolean,
});

// Write some encrption for Password

const users = mongoose.model('users', userSchema);
export default users;
