//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import incomeRoutes from './routes/income.mjs';
import Incomes from './models/incomeSchema.mjs'
import incomeData from './utilities/incomeData.mjs'

//Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/income', incomeRoutes);

//Create a seed route to fill our database with data
app.get('/seed',async(req,res) => {
    await Incomes.create(incomeData);
    res.send('seeding db')
})




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