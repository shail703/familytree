const mongoose = require('mongoose');
    
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'User must have a name'],
        trim: true
      },
      slug: String,
      Gender: {
        type: String,
        enum: ["male", "female", "other"],

      },
      DOB: {
        type: Date,
    },
      city: {
        type: String,
      },
     createdTime: {
        type: Date,
        default:Date.now()
      },
      lastUpdatedTime: {
        type: Date,
        default:Date.now()
      },
    isParent:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },
      user: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

const User = mongoose.model('User', userSchema);

module.exports = User;