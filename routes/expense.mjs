import express from 'express';
const router = express.Router();

import ExpenseCtrl from '../controllers/expenseControllers.mjs';

//Create
router.post('/', ExpenseCtrl.CreateExpense);

//Read 
router.get('/',ExpenseCtrl.ReadExpense);

export default router