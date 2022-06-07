const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks-controller');

router.get('/', tasksController.index);
router.get('/new', tasksController.new);
router.post('/', tasksController.store);
router.post('/deleteTask/:id', tasksController.destroy);

module.exports = router;



