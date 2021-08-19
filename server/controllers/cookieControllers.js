const models = require("../models/model");
const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.user) {
    res.cookie('SSID', res.locals.user.id, { httpOnly: true, expires: new Date(Date.now() + 900000) }) 
    // cookie lasts 15 min
  }
  return next();
}

cookieController.verifyCookie = (req, res, next) => {
  const userCookie = req.cookies.SSID;
  models.User.findOne({ _id : userCookie })
  .then((result) => {
    res.locals.session = result;
    return next();
  })
  .catch((err) =>
    next({ message: `cookieController.verifyCookie: Error: ${err}` })
  );
}

module.exports = cookieController;

