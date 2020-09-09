const mongoose = require ('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
      },
    
      userName: {
        type: String,
        required: true
      },
      userImage: {
        type: String,
        required: true
      },
      coverImage: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      place: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      likes: {
        type: Number,
        required: true
      },
      tags: {
        type: String,
        required: true
      }
})


module.exports = mongoose.models.Profiles||mongoose.model('Profiles',ProfileSchema);