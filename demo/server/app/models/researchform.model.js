module.exports = mongoose => {
    
    
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          title: String,
          sectionNames: [{sections: []}],
          checklistFields: [{statements: [], section: []}],
          postSession: [{question: []}], 
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

  module.exports = mongoose => {
    const Instance = mongoose.model(
      "instance",
      mongoose.Schema(
        {
          title: String,
          sectionNames: [{sections: []}],
          checklistFields: [{statements: [], section: []}],
          postSession: [{question: []}], 
          published: Boolean, 
          instance: Boolean, //true or false whether or not this form is an instance or a form
          answers: [], //answers to a form, NULL if instance = false
          questions: [] //questions of a form
        },
        { timestamps: true }
      )
    );
    return Instance;
  }
