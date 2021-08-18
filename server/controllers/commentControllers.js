const models = require("../models/model");
const commentController = {};

commentController.createComment = (req, res, next) => {
  const newComment = new models.Comment(req.body);

  newComment
    .save()
    .then((data) => {
      res.locals.comment = data;
      return next();
    })
    .catch((err) =>
      next({ message: `commentController.createComment: Error: ${err}` })
    );
};

commentController.getAllComments = (req, res, next) => {
  models.Comment.find({})
  .then(results => {
    res.locals.comments = results;
    return next()
  })
  .catch((err) =>
    next({ message: `commentController.getAllComments: Error: ${err}` })
  );
}

commentController.editComment = (req, res, next) => {
  const { id, suggestion } = req.body;
  console.log(req.body, 'req.body')
  
  models.Comment.findOne({ _id: id })
  .then((comment) => {
    console.log(comment, 'comment')
    comment.suggestion = suggestion,

    post.save()
    .then((comment) = res.json(comment))
    .catch((err) => res.status(400).json("Error :" + err));
   })
  .catch((err) => res.status(400).json("error, Comment not found : " + err));
}

commentController.deleteComment = (req, res, next) => {
  models.Comment.findOneAndDelete({ _id: req.body.id })
  .then(() => { 
    res.json("COMMENT DELETED FOREVER!");
  })
  .catch((err) => res.status(400).json("Error, Comment not found: " + err));
}

module.exports = commentController;