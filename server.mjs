//Imports
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import incomeRoutes from './routes/income.mjs';
import Incomes from './models/incomeSchema.mjs'
import incomeData from './utilities/incomeData.mjs'
import expenseRoutes from './routes/expense.mjs';
import Expenses from './models/expenseSchema.mjs'
import expenseData from './utilities/expenseData.mjs'


//Configurations
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

//Connect to DB
connectDB();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5174' 
}));

//Middleware
app.use(express.json());

//Routes
app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);

//Create a seed route to fill our database with data
app.get('/seed',async(req,res) => {
    await Incomes.deleteMany(); // Optional: Clear existing data
    await Expenses.deleteMany(); // Optional: Clear existing data
    await Incomes.create(incomeData);
    await Expenses.create(expenseData);
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