import {Schema, model, Types} from "mongoose";

let schema = new Schema({
    name:{type: String, required: true},
    lasta_name:{type: String, required: false},
    city:{type: String, required: true},
    country:{type: String, required: true},
    photo:{type: String, required: true},
    active:{type: Boolean, required: true},
    user_id:{type: Types.ObjectsId, href: 'users', required: true}
},
{
    timestamps: true
})

let collection = 'authors'
let Author = model(schema, collection)
export default Author