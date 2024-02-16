const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.list);
router.post('/add', userController.save);
router.get('/update/:id', userController.update);
router.post('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.delete);

module.exports = router;