import mongoose from "mongoose"

const SiteSetingsSchema = new mongoose.Schema({

  logo: {

    type: String,
    required: true,

  },


  facebookUrl: {


    type: String,
    required: true

  },


  youtubeUrl: {

    type: String,
    required: true

  },



  twitterUrl: {

    type: String,

    required: true
  }



}, { timestamps: true })





export default mongoose.models.SiteSetting || mongoose.model('SiteSetting', SiteSetingsSchema)