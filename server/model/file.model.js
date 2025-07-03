import mongoose  from "mongoose";

const FileSchema =new  mongoose.Schema({

    path:{type:String,required:true},
    name:{type:String,required:true},
    type:{type:String,required:true},
    size:{type:Number,required:true},
    downloadCount:{type:Number,
        requrired:true,
        default:true,
    },
    expiresAt:{
        type:Date,
        default:null

    },
    status: {
    type: String,
    enum: ['active', 'expired'],
    default: 'active',
  },
  shortUrl: {
    type: String,
    default: null,
  },
  // ✅ User ID
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isPasswordProtected: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String, // store hashed password using bcrypt
    default: null,
  },

  // ✅ Optional Expiry
  hasExpiry: {
    type: Boolean,
    default: false,
  },



},{timestamps:true})

const file=mongoose.model('File',FileSchema);
export {file};