const models = require("../models/model");
const bcrypt = require("bcrypt");
const saltRound = 10;

const userController = {};

userController.createUser = async (req, res, next) => {
  const { password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRound);
  const newUser = new models.User({...req.body, password: encryptedPassword});

  newUser
    .save()
    .then((data) => {
      res.locals.user = data;
      return next();
    })
    .catch((err) =>
      next({ message: `userController.createUser: Error: ${err}` })
    );
};

userController.verifyUser = (req, res, next) => {
  console.log(req.cookies, "cookies?")
  const { password } = req.body;
  models.User.findOne({ username: req.body.username })
  .then(async (result) => {
    res.locals.result = await bcrypt.compare(password, result.password);
    res.locals.user = result;

    if (res.locals.result === false) {
      res.locals.result = "User password Error";
      throw new Error(
        "It's either your password is wrong or your user name is wrong"
      );
    }
    if (res.locals.result === true) {
      //sending true back to frontend
      return next();
    }
    return next(); //dont get stuck in middleware
  })
  .catch((err) =>
    next({ message: `userController.verifyUser: Error: ${err}` })
  );
};

module.exports = userController;