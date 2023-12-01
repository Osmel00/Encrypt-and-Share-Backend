import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import linkRouter from "./routers/route";
const app = express();

const port = 3000;
app.use(cors());
app.use(express.json())

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello");
});
app.use("/link", linkRouter);
//mongodb://localhost:27017
const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/encryptDB"
      //process.env.MONGODB_SERVER_URL as string,
    );

    console.log("Connected to DB");
  } catch (error) {
    console.log("Couldn't connect to DB", error);
  }
};
connectDb();

app.listen(port, () => {
  console.log("listening on http://localhost:" + port );
});
