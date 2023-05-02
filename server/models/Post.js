import mongoose from "mongoose";
/**
userId: a required string representing the user ID of the user who created the post

firstName: a required string representing the first name of the user who created the post

lastName: a required string representing the last name of the user who created the post

location: a string representing the location of the post

description: a string representing the description of the post

picturePath: a string representing the file path of the post image

userPicturePath: a string representing the file path of the user's profile image

likes: a Map object containing boolean values, representing whether a user has liked the post or not

comments: an array of comment objects, containing text and the ID of the user who wrote the comment. The default value of the comments array is an empty array.
 */
const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
