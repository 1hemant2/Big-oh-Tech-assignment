const Form = require('../model/formModel');

/**
 *   The `exports.createForm` function is a controller function that handles the
creation of a form based on the data received in the request body. Here's a breakdown of what the
function does
 *@param {uniqueId} {string} - it is id of the form and always unique
 *@param {title}  {string} - it is also unique and based on this we search the form 
 *@param {name}  {string} -  name of the user 
 *@param {email}  {string} - email of the user
 *@param {phonenumber} {number} - phone number of user
 *@param {isGraduate} {bool} - yes or no 
 */
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

/**
 *   The `exports.fillData` function is a controller function  that handles the
validation of a form based on the data received in the request body and query. Here's a breakdown of what the
function does
 *@param {title}  {string} - it is receied as query and based on this we match the data 
 *@param {uniqueId} {string} - it is id of the form and always unique
 *@param {name}  {string} -  name of the user 
 *@param {email}  {string} - email of the user
 *@param {phonenumber} {number} - phone number of user
 *@param {isGraduate} {bool} - yes or no 
 */

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

/**
 *   The `exports.getAllData` function is a controller function that handles the get request of user based on the title of the form. Here's a breakdown of what the function does
 *@param {title}  {string} - it is receied as query and based on this we match the data 
 */
exports.getAllData = async (req, res) => {
    try {
        const { form_title } = req.query;
        console.log(form_title);
        const data = await Form.findAll({
            where: {
                title: form_title,
            },
        })
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}