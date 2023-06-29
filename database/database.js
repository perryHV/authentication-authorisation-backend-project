import mongoose from "mongoose";

//const db = "mongodb+srv://test:test@test-application.jqyomdr.mongodb.net/?retryWrites=true&w=majority"
const db =
  "mongodb+srv://test:test@test-application.jqyomdr.mongodb.net/?retryWrites=true&w=majority";
// mongoose.set('strictQuery', false);
// mongoose
//   .connect(db, {

//   }).then(() => console.log("Database Connected")).catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure

    process.exit(1);
  }
};

const User = mongoose.model("User", userSchema);

export default connectDB;
export { User };
