//might not need this just yet
const express = require("express");
const postController = require("../controllers/postControllers");
const cookieController = require("../controllers/cookieControllers");
const router = express.Router();

//GET request for user feed
router.get("/", 
postController.getAllPosts,
cookieController.verifyCookie,
(req, res) => {
  // res.json(res.locals.allPosts);
  res.json(res.locals);
});

//POST request for creating new Post
router.post("/", postController.createPost, (req, res) => {
  res.status(200).send("Successfully Created Post");
});

//PUT request for editing post
router.put("/", postController.editPost, (req, res) => {
  res.status(200).send("Successfully edited Post");
});

//DELETE request for Delete Post
router.delete("/", postController.deletePost, (req, res) => {
  res.status(200).send("Successfully deleted Post");
});

module.exports = router;
