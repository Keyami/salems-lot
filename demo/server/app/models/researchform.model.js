module.exports = mongoose => {
    
    
    const ResearchForm = mongoose.model(
      "researchform",
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
