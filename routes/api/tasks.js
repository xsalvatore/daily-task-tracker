const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');


router.get('/', (request, response) => {
    Task.find()
        .sort({date: -1})
        .then(tasks => response.json(tasks))
});


router.get('/priority', (request, response) => {
    Task.find({priority : true})
        .sort({date: -1})
        .then(tasks => response.json(tasks))
});

router.get('/inbox', (request, response) => {
    Task.find({priority : false})
        .sort({date: -1})
        .then(tasks => response.json(tasks))
});

// route to POST a task
router.post('/', (request, response) => {
    // new task object with the content being retrieved from the body
    const newTask = new Task({
        name: request.body.name
    });

    // adds the new task to the database
    newTask.save().then(task => response.json(task));
});

// route to UPDATE a task with a specific id 
router.put('/:id', (req, res)=> {
    Task.findById(req.params.id)
        .then(task => task.update({"priority" : !task.priority}).then(() => res.json({ succes: true })))
        .catch(error => res.status(404).json({ succes: false }));
});

// route to DELETE a task with a specific id
router.delete('/:id', (req, res)=> {
    Task.findById(req.params.id)
        .then(task => task.remove().then(() => res.json({ succes: true })))
        .catch(error => res.status(404).json({ succes: false }));
});



module.exports = router;