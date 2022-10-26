module.exports = app => {
    const researchform = require("../controllers/researchform.controller.js");
  
    var router = require("express").Router();
  
    // Create a new research form
    router.post("/api/test/all", researchform.create);
  
    // Retrieve all research forms
    router.get("/api/test/", researchform.findAll);
  
    // Retrieve all published research forms
    router.get("/api/test/published", researchform.findAllPublished);
  
    // Retrieve a single researchform with id
    router.get("/api/test/:id", researchform.findOne);
  
    // Update a researchform with id
    router.put("/api/test/:id", researchform.update);
  
    // Delete a researchform with id
    router.delete("/api/test/:id", researchform.delete);
  
    // Delete all forms
    router.delete("/", researchform.deleteAll);
  
    app.use('/api/research-form', router);
};