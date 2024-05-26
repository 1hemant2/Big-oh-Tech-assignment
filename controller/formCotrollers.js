const Form = require('../model/formModel');
exports.createForm = async (req, res) => {
    try {
        const { uniqueId, title, name, email, phonenumber, isGraduate } = req.body;
        console.log(uniqueId, title, name, email, phonenumber, isGraduate);
        const phonenumberInt = parseInt(phonenumber, 10);
        const isGraduateBool = isGraduate === 'true'
        console.log(typeof phonenumberInt);
        console.log(typeof isGraduateBool);
        await Form.create({
            uniqueId,
            title,
            name,
            email,
            phonenumber: phonenumberInt,
            isGraduate: isGraduateBool
        })
        res.send('Form filled successfully');
    } catch (error) {
        res.send(error.message);
    }
}
// exports.fillData = async (req, res) => {

// }
// exports.getAllData = async (req, res) => {

// }