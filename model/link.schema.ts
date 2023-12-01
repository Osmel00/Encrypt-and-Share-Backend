import mongoose, { Schema, Document } from "mongoose";
import {links} from '../type';
const linkSchema:Schema = new Schema({
    link:{type:String,require:true,trim:true},
},
{
    versionKey:false,
    timestamps: true,
}
);

const LinkModel = mongoose.model<links & Document>('Link',linkSchema)
export default LinkModel;

//"dev": "nodemon dist/index.js"