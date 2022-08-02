const Task = require('../models/todoModels');

exports.getAllTasks = async (req, res) => {
    try{
        const task = await Task.find();
        res.status(200).json({
            status: 'success',
            data: [
                task
            ]
        })
    } catch (err){
        res.status(404).json({
            status: 'fail',
            message: 'Tasks have not been found'
        })
    }
}

exports.createTask = async (req, res) => {
    try{
        const newTask = await Task.create(req.body);

        res.status(200).json({
            status:'success',
            message: "New Task Added",
            data: {
                newTask
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'A new task cannot be created'
        })

    }
}

exports.deleteTask = async (req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            message: 'Task successfully deleted',
            data: null
        })
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Task not found'
        })

    }
}

exports.updateTask = async(req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
            runValidators: true
           });
        // console.log(req.body);
        const testTask = await Task.find()
        res.status(200).json({
            status: 'success',
            message: "Task succesfully updated",
            data: {
                updateTask
            }
        })
    } catch (error) {
       console.log(error);
    }
}
