const db = require("../models");
const ResearchForm = db.researchforms;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Form
    const researchform = new ResearchForm({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Form in the database
    researchform
      .save(researchform)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Research Form."
        });
      });
  };

// Retrieve all Forms from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    ResearchForm.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving research forms."
        });
      });
  };

// Find a single Form with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ResearchForm.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Research Form with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Research Form with id=" + id });
      });
  };

// Update a Form by the id in the request
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
            message: `Cannot update Form with id=${id}. Maybe Form was not found!`
          });
        } else res.send({ message: "Form was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Form with id=" + id
        });
      });
  };
// Delete a Form with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    ResearchForm.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Form with id=${id}. Maybe Form was not found!`
          });
        } else {
          res.send({
            message: "Form was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Research Form with id=" + id
        });
      });
  };

// Delete all Forms from the database.
exports.deleteAll = (req, res) => {
    ResearchForm.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Forms were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all forms."
        });
      });
  };

// Find all published Forms
exports.findAllPublished = (req, res) => {
    ResearchForm.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving forms."
        });
      });
  };