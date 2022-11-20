module.exports = mongoose => {
    const InstanceSchema = new Schema({ name: String });
    const Instance = mongoose.model(
      "instance",
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
    return Instance;
  }