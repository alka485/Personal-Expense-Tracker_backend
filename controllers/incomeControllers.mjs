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
}