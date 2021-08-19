const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://taskapp:Musso06@cluster0.xxusx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
});

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  suggestion: { type: String, required: true },
  author: { type: String, required: true }, 
  created_at: { type: String },
  // post: { type: Schema.Types.ObjectId, ref: 'Post' },
  post: { type: String },
  likes: { type: Number, required: true, default: 0 },
});

const Comment = mongoose.model("Comment", commentSchema);

const postSchema = new Schema({
  title: { type: String, required: true },
  goal: { type: String, required: true },
  method: { type: String },
  duration: { type: String },
  results: { type: String },
  author: { type: String },
  created_at: { type: String },
  comments: [],
  // comments: [{
  //   // suggestion: String,
  //   // author: String, 
  //   // created_at: String,
  //   // likes: Number,
  //   // id: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Comment'
  //   // }
  // }],
  // likes: { type: Number, required: true, default: 0 },
});

const Post = mongoose.model("Post", postSchema);

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  liked_comments: { type: [commentSchema] },
  // liked_posts: { type: [postSchema] }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  Post,
  Comment,
};