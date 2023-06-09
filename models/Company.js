import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    website: {type: String, required: true},
    description: {type: String, required: false},
    active: {type: Boolean, required: true},
    user_id: {type: mongoose.Types.ObjectId, href: 'users', required: true},
},{
    timestamps: true
})

let collection = 'companies'

let company = mongoose.model(collection, schema)
export default company