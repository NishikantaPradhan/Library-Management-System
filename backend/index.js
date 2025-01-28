import express from "express";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();


app.use(express.json());


app.use(cors());


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome To MERN Stack Tutorial')
});




app.use('/books', booksRoute);

mongoose
  .connect("mongodb://localhost:27017/bookstore")
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    
  })
  .catch((error) => {
    console.log(error);
  })
