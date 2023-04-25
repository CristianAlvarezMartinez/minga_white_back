import mongoose from "mongoose";

let schema = new mongoose.Schema({
    img: {type:String}
},
{
    timestamps: true
})

let collection = 'heroImgs'
let Hero_Imgs = mongoose.model(collection, schema)
export default Hero_Imgs