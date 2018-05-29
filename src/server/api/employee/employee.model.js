const Mongoose = require("mongoose");

const EmployeeSchema = new Mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    designation: {
        type: String
    },
    competency: {
        type: String
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    dob: {type: Number},
    empId: {type: Number}
}, { versionKey: false })

module.exports = Mongoose.model('Employees', EmployeeSchema);