const express = require("express");
const commentController = require("../controllers/commentControllers");
const router = express.Router();

router.get("/", commentController.getAllComments, (req, res) => {
  res.status(200).json([...res.locals.comments]);
});

router.get("/:id", commentController.getPostComments, (req, res) => {
  res.status(200).json(res.locals.postwithcomments);
});

router.post("/:id", commentController.createComment, (req, res) => {
  res.status(200).json(res.locals.postwithcomments);
});

router.put("/", commentController.editComment, (req, res) => {
  res.status(200).send("Successfully edited Comment");
});

router.delete("/", commentController.deleteComment, (req, res) => {
  res.status(200).send("Successfully deleted Comment");
});

module.exports = router;