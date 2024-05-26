const router = require('express').Router();
const formController = require('../controller/formCotrollers')

const formRouter = router.post('/form', formController.createForm)
// .post('/fill_data', formController.fillData)
// .get('/getAllData', formController.getAllData);
module.exports = formRouter;