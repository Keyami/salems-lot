module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            researchGroupId: String,
            sections: [
            {
                type: mongoose.Schema.Types.Mixed,
                ref: "Section"
            }
            ],
            published: Boolean
        },
        { timestamps: true }      
    );
    return ResearchForm;
};

  