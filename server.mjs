//Imports
import express from 'express';
import dotenv from 'dotenv';

//Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
// connectDB();

//Middleware
app.use(express.json());



//Error Checking Middleware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: 'You have encountered an error' });
  });

  app.get("/", (req,res) => {
    res.send("Welcome")
})

  
  //Listen to our express server
  app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
  });