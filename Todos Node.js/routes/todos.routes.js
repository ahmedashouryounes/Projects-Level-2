const router = require('express').Router()
const {Todos} = require('../models/todos.model')

const user = {
    id: "235542432564326478266",
    name: "ahmed ashour"
}
// get todos
router.get('/getTodos', async (req, res) => {

    const user = req.user

    if (user.role == 'admin') {
        const todos = await Todos.find()

        res.status(200).json({
            todos
        })
    } else {
        const todos = await Todos.find({
            'createdBy.id': user.id
        })

        res.status(200).json({
            todos
        })
    }

})

// create todos
router.post('/createTodos', async (req, res) => {
    const {
        title,
        completed
    } = req.body

    const user = req.user
    const todos = new Todos({
        title,
        completed,
        createdBy: {
            id: user.id,
            name: user.name
        }
    })

    await todos.save()

    res.status(201).json({
        todos
    })

})

// update todos
router.put('/updateTodos/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const {
        title,
        completed
    } = req.body;

    const user = req.user;

    if (user.role == 'admin') {
        const todos = await Todos.findByIdAndUpdate()

        res.status(200).json({
            todos
        })
    } else {
        const todos = await Todos.findOneAndUpdate({
            _id: id,
            'createdBy.id': user.id
        }, {
            title,
            completed
        })

        if (!todos) return res.status(404).json({
            msg: 'Todos Not Found'
        })


        res.status(200).json({
            msg: 'Todos Updated Successfully.'
        })
    }


})

// delete todos
router.delete('/deleteTodos/:id', async (req, res) => {

    const {
        id
    } = req.params

    const user = req.user

    if (user.role == 'admin') {
        const todos = await Todos.findByIdAndDelete()

        res.status(200).json({
            todos
        })
    } else {

        const todos = await Todos.findOneAndDelete({
            _id: id,
            'createdBy.id': user.id
        })

        if (!todos) return res.status(404).json({
            msg: 'Todos Not Found'
        })

        res.status(200).json({
            msg: "Todos Deleted Successfully."
        })

    }
})

module.exports = router