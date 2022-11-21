module.exports = mongoose => {
    
    
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          id: null,
          title: String,
          sectionNames: [{sections: []}],
          checklistFields: [{statements: [], section: []}],
          postSession: [{question: []}], 
          published: Boolean, 
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
          instance: Boolean 
        },
        { timestamps: true }
      )
    );
    return Instance;
  }
