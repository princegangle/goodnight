import mongoose from "mongoose";

export const connection = async() => {
  const URL =
    `mongodb+srv://p60337505:KGfffS4HkdWbuN6L@cluster0.gld0kp5.mongodb.net/?retryWrites=true&w=majority` ;

  

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("db donnect ok okvccvcvcv vb  VV  okn M ") ;
  } catch (error) {
    console.log("cont load ", error.message);
  } 
};
export default connection;   











