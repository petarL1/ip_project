const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks-controller');

router.get('/', tasksController.index);
router.get('/new', tasksController.new);
router.get('/:id', tasksController.show);
router.get('/:id/edit-task', tasksController.edit);


router.post('/', tasksController.store);
router.post('/deleteTask/:id', tasksController.destroy);
router.post('/update/', tasksController.update);

module.exports = router;



