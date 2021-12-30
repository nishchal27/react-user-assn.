import express from 'express';
import  mongoose  from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import autoIncrement from 'mongoose-auto-increment';

const app = express();

const port = 8000;
const url = 'mongodb+srv://user:user123@crud.rwdgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/users', route);

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,}).then(()=>{
    app.listen(port, ()=>{
        console.log(`server is  running on port ${port}`);
    });
}).catch(error =>{
    console.log('error: ', error.message);
});



const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: {type: Number, unique: true},
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema);

export default user;