const models = require("../models/model");
const commentController = {};

commentController.createComment = (req, res, next) => {
  models.Comment.create(req.body)
  .then((data) => {
    const newComment = data;
    const postId = req.params.id;
    models.Post.findOne({ _id: postId }, (err, post) => {
      const postComments = post.comments;
      postComments.push(newComment)
      models.Post.findOneAndUpdate({ _id: postId }, {comments: postComments}, { new: true }, (err, post) => {
        res.locals.postwithcomments = post;
        // console.log(res.locals.postwithcomments, 'res.locals.postwithcomments')
        return next();
      })
    })
    // models.Post.findOneAndUpdate({ _id: postId }, { comments: [data._id] }, {new: true}, (err, post) => {
    //   res.locals.postwithcomments = post;
    //   return next();
    // });
  })
  .catch((err) =>
    next({ message: `commentController.createComment: Error: ${err}` })
  );
};

commentController.getPostComments = (req, res, next) => {
  const postId = req.params.id;
  models.Post.findOne({ _id: postId })
  // .populate('Comment')
  .then(post => {
    res.locals.postwithcomments = post;
    return next();
  })
  .catch((err) => {
    next({ message: `commentController.getPostComments: Error: ${err}` })
  })
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
  
  models.Comment.findOne({ _id: id })
  .then((comment) => {
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