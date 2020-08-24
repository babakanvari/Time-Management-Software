const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    year: Number,
    week: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    status: String,
    data: [
        {
            date: Date,
            projectId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "projects"
            },
            activity: String,
            category: String,
            transactionText: String,
            hour: Number,
        }
    ]
})

schema.index({ 'year': 1, 'week': 1, 'userId': 1 }, { "unique": true });
const TimesheetModel = mongoose.model("timesheets", schema);

module.exports = TimesheetModel;