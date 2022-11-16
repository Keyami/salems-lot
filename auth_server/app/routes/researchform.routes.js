module.exports = app => {
    const researchforms = require("../controllers/researchform.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/researchforms/", researchforms.create);
  
    // Retrieve all Tutorials
    router.get("/researchforms/", researchforms.findAll);
  
    // Retrieve all published Tutorials
    router.get("/researchforms/published", researchforms.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/researchforms/:id", researchforms.findOne);
  
    // Update a Tutorial with id
    router.put("/researchforms/:id", researchforms.update);
  
    // Delete a Tutorial with id
    router.delete("/researchforms/:id", researchforms.delete);
  
    // Create a new Tutorial
    router.delete("/researchforms/", researchforms.deleteAll);
  
    app.use('/api/researchforms', router);
  };