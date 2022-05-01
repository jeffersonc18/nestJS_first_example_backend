import {Schema} from 'mongoose';


export const StudentSchema = new Schema({

    code:{type: Number,required: true},
    name: {type: String,required: true},
    photoURL: {
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
    
})