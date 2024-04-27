import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    profileImg: {
      type: String,
      default: "",
    },
    coverImg: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },

  { timestamps: true }
);
//this is the schema

// In Mongoose, the timestamps option is used to automatically add two fields, createdAt and updatedAt, to the schema. These fields store the date and time when a document was created and last updated, respectively.

//now we will create the model
const User = mongoose.model("User", userSchema);
//bts it's going to look like users with an s
//By default, Mongoose will convert the model name to lowercase and then pluralize it to derive the collection name.

export default User;
