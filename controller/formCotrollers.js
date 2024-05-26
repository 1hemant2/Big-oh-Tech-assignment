const Form = require('../model/formModel');
exports.createForm = async (req, res) => {
    try {
        const { uniqueId, title, name, email, phonenumber, isGraduate } = req.body;
        console.log(uniqueId, title, name, email, phonenumber, isGraduate);
        const phonenumberInt = parseInt(phonenumber, 10);
        const isGraduateBool = isGraduate === 'true';
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
exports.fillData = async (req, res) => {
    try {
        const { form_title } = req.query;
        const { uniqueId, name, email, phonenumber, isGraduate } = req.body;
        const phonenumberInt = parseInt(phonenumber, 10);
        const isGraduateBool = isGraduate === 'true';
        const data = await Form.findOne({
            where: {
                title: form_title,
            },
        })

        if (name !== data.name) {
            throw new Error("Authentication failed , Name mismatch")
        }
        if (uniqueId !== data.uniqueId) {
            throw new Error("Authentication failed , uniqueID mismatch")
        }
        if (email !== data.email) {
            throw new Error("Authentication failed , email mismatch")
        }
        if (phonenumberInt !== data.phonenumber) {
            throw new Error("Authentication failed , phone number mismatch")
        }
        if (isGraduateBool !== data.isGraduate) {
            throw new Error("Authentication failed , Graduation detial mismatch")
        }
        res.send("Authenticated successfully");
    } catch (error) {
        res.send(error.message);
    }
}
exports.getAllData = async (req, res) => {
    try {

    } catch (error) {

    }
}