import { Mongoose } from "mongoose";

const userSchema = Mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number,
});


const user = Mongoose.model('user', userSchema);

export default user; 