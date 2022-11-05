module.exports = mongoose => {
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
            title: String,
            description: String,
            researchGroupId: String,
            researchCategory: String,
            sections: [
            {
                type: mongoose.Schema.Types.Mixed,
                ref: "Section"
            }
            ],
            published: Boolean
        },
        { timestamps: true } 
      )
    );
  
    return ResearchForm;
};