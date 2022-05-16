import  express from "express";
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb+srv://admin:aloha808@cluster0.juhn4.mongodb.net/IronBlogApp?retryWrites=true&w=majority')
.then(()=>app.listen(5000)).then(()=>console.log("Connected and listening to Localhost 5000")).catch((err)=>console.log(err))
