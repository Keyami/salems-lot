const controller = require("../controllers/researchform.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    const researchform = require("../controllers/researchform.controller.js");
  
    var router = require("express").Router();
  
    // Create a new research form
    router.get("/api/user/researchforms",[authJwt.verifyToken, authJwt.isUser], researchform.create);
  
    // Retrieve all research forms
    router.get("/api/user/researchforms/",[authJwt.verifyToken, authJwt.isUser], researchform.findAll);
  
    // Retrieve all published research forms
    router.get("/api/user/researchforms/published", [authJwt.verifyToken, authJwt.isUser],researchform.findAllPublished);
  
    // Retrieve a single researchform with id
    touter.get("/api/user/researchform/:id", [authJwt.verifyToken, authJwt.isUser],researchform.findOne);
  
    // Update a researchform with id
    router.put("/api/user/researchform/:id", [authJwt.verifyToken, authJwt.isUser],researchform.update);
  
    // Delete a researchform with id
    router.delete("/api/user/researchform/:id",[authJwt.verifyToken, authJwt.isModerator], researchform.delete);
  
    // Delete all forms
    router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], researchform.deleteAll);
  
    app.use('/api/researchforms', router);
};