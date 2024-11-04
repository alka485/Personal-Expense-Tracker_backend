import express from 'express';
const router = express.Router();
import IncomeCtrl from '../controllers/incomeControllers.mjs';

//Create
router.post('/', IncomeCtrl.CreateIncome);

//Read 
router.get('/',IncomeCtrl.ReadIncome);