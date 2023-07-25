import mongoose from "mongoose";


const connectDB = ()=>{
    if(mongoose.connections[0].readyState){
        console.log('Mongodb is already connected');
    }

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Mongo Connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connectDB;