import mongoose from 'mongoose';

const Schema = mongoose.Schema;



const liveSchema = new Schema({

    image: {
        type: String,
        required: true,

        trim: true
    },

    videourl: {

        type: String,
        required: true,

        trim: true
    },



},{timestamps:true}   )



export default mongoose.models.Live || mongoose.model("Live", liveSchema)