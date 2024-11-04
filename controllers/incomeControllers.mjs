import Incomes from '../models/incomeSchema.mjs';

//Functions
const CreateIncome = async (req,res) => {
    try {

        let newIncome = new Incomes(req.body);

        await newIncome.save();

        res.json(newIncome);

    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'});
        
    }
};

const ReadIncome = async(req,res) {
    try {
        //Get data save to variable
        const allIncomes = await Incomes.find({});
        //Send data to front end: res
        res.json(allIncomes);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: 'Server Error'});     
    }
};

export default {CreateIncome , ReadIncome};