import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Connection from "./database/db.js";
const app = express();
import Route from "./routes/route.js";

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);
Connection();
const PORT = 3005;

if(process.env.NODE_ENV=="production")
{
  app.use(express.static("client/build"));
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
