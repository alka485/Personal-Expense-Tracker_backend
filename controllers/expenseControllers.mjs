import Expenses from '../models/expenseSchema.mjs';

//Functions
const CreateExpense = async (req,res) => {
    try {

        let newExpense = new Expenses(req.body);

        await newExpense.save();

        res.json(newExpense);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'});
        
    }
};

const ReadExpense = async(req,res) => {
    try {
        //Get data save to variable
        const allExpenses = await Expenses.find({});
        //Send data to front end: res
        res.json(allExpenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'});     
    }
};

export default {CreateExpense , ReadExpense};