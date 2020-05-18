const mongoose = require('mongoose');

const TimesheetModel = mongoose.model(
    "timesheets",
    new mongoose.Schema({
        weekNumber: {
            type: Number, //should be year plus week number e.g. 202016 (year 2020 week number 16)
            required: true,
            unique: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        status: String,
        hours: [
            {
                date: Date,
                projectNumber: {
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
);

module.exports = TimesheetModel;