module.exports = mongoose => {
    
    
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          id: null,
          title: String,
          sectionNames: [],
          checklistFields: [{statements: [], section: []}],
          postSession: [], 
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
          sectionNames: [],
          checklistFields: [],
          postSession: [], 
          published: Boolean,
        },
        { timestamps: true }
      )
    );
    return Instance;
  }
