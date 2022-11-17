module.exports = app => {
    const researchforms = require("../controllers/researchform.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", researchforms.create);
  
    // Retrieve all Tutorials
    router.get("/", researchforms.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", researchforms.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", researchforms.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", researchforms.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", researchforms.delete);
  
    // Create a new Tutorial
    router.delete("/", researchforms.deleteAll);
  
    app.use('/api/researchforms', router);
  };