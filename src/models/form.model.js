import mongoose,{Schema} from "mongoose";
const formSchema = new Schema({
  fullName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  phoneNumber:{
    type:String,
    required:true,
  },
  collegeName:{
    type:String,
    required:true,
  },
  whatsappNumber:{
    type:String,
    required:true,
  },
  studies:{
    type:String,
    enum:["+2","bachelor","master"],
    required:true,
  }
  },{
    timestamps:true,
  });

export default mongoose.model("Form",formSchema);