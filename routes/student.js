const express = require('express')
const router = express.Router()
const Student = require('../models/student')

// CREATE
router.post('/', async (req, res) => {
    const StudentPost = new Student({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const student = await StudentPost.save()
        res.json(student)
    } catch (error) {
        res.json({ message: err})
    }
});

// READ
router.get('/', async(req, res) => {
    try {
        const student = await Student.find()
        res.json(student)
    } catch (error) {
        res.json({ message: err})
    }
}); 

//UPDATE
router.put('/:id', async(req, res) => {
    try {
        const student = await Student.updateOne({_id: req.params.id},{
            nama: req.body.nama,
            alamat: req.body.alamat
        })
        res.json(student)
    } catch (error) {
        res.json({ message: error})
    }
});

//DELETE
router.delete('/:id', async(req, res) => {
    try {
        const student = await Student.deleteOne({_id: req.params.id})
        res.json(student)
    } catch (error) {
        res.json({ message: error})
    }
});


module.exports  = router