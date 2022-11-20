module.exports = mongoose => {
    const InstanceSchema = new Schema({ name: String });
    const FormSchema = new Schema({ name: String });
    const ResearchForm = mongoose.model(
      "researchform",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean, 
          instance: Boolean, //true or false whether or not this form is an instance or a form
          answers: [InstanceSchema], //answers to a form, NULL if instance = false
          questions: [FormSchema] //questions of a form
        },
        { timestamps: true }
      )
    );
  
    return ResearchForm;
  };