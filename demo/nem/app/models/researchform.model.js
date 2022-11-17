module.exports = mongoose => {
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return ResearchForm;
  };