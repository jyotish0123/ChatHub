import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const Connection = async () => {
  const URL = `mongodb://user:12345@ac-mchdl2p-shard-00-00.wxgl99v.mongodb.net:27017,ac-mchdl2p-shard-00-01.wxgl99v.mongodb.net:27017,ac-mchdl2p-shard-00-02.wxgl99v.mongodb.net:27017/?ssl=true&replicaSet=atlas-4jgppt-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("url connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};

export default Connection;
