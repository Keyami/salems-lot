const db = require("../models");
const ResearchForm = db.researchforms;

// Create and Save a new Research Form
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ResearchForm
  const ResearchForm = new ResearchForm({
    title: req.body.title,
    description: req.body.description,
    researchGroupId: req.body.researchGroupId,
    researchCategory: req.body.researchCategory,
    
    published: req.body.published ? req.body.published : false
  });

  // Save ResearchForm in the database
  ResearchForm
    .save(ResearchForm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Research Checklist."
      });
    });
};

// Retrieve all Research Forms from the database.
exports.findAll = (req, res) => {
  console.log("We are here!");
  const title = req.query.title;

    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  ResearchForm.find(condition)
      .then(data => {
      res.send(data);
      })
      .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving checklist."
      });
  });
};

// Find a single Research Form with an id
exports.findOne = (req, res) => {
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ResearchForm.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Checklist with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving TChecklist with id=" + id });  
    });
  };
};

// Update a Research Form by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  
  const id = req.params.id;

  ResearchForm.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Checklist with id=${id}. Checklist not found!`
        });
      } else res.send({ message: "Research Form was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Research Form with id=" + id
  });
});
};

// Delete a Research Form with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ResearchForm.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete checklist with id=${id}. Checklist was not found!`
            });
        } else {
            res.send({
                message: "Checklist was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete checklist with id=" + id
        });
    });
};

// Delete all Research Forms from the database.
exports.deleteAll = (req, res) => {
  ResearchForm.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Checklists were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all Checklists."
    });
  });
};

// Find all published Research Forms
exports.findAllPublished = (req, res) => {
  ResearchForm.find({ published: true })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Checklists."
    });
  });
};