const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    nama: {
        type: String,
        require: true
    },
    alamat:{
        type: String,
        require: true
    },
    daftar: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Student', StudentSchema)