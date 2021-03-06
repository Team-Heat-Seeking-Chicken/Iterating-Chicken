const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://admin:admin@jared.uoo20.mongodb.net/scratch?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required:true},
  goal: { type: String, required: true },
  method: { type: String },
  duration: { type: String },
  results: { type: String },
  author: { type: String },
  created: { type: String }
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
module.exports = {
  User,
  Post,
};
