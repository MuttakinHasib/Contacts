import "./env.js";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/error.js";

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Contacts Application" });
});

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port : ${port}`));
