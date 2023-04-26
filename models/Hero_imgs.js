import mongoose from "mongoose";

let schema = new mongoose.Schema({
    img: {type:String}
},
{
    timestamps: true
})

let collection = 'imgscrl'
let imgscrl = mongoose.model(collection, schema)
export default imgscrl