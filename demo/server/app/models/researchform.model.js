module.exports = mongoose => {
    
    
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean, 
          instance: Boolean, //true or false whether or not this form is an instance or a form
          answers: [], //answers to a form, NULL if instance = false
          questions: [] //questions of a form
        },
        { timestamps: true }
      )
    );
    
    return ResearchForm;
  };

  
