const mongoose = require('mongoose');
const TimesheetModel = require('./models/timesheet');
const { connectdb, disConnectdb } = require('./database');

const createTimesheet = async weeklyHours => {
  connectdb();
  const hours = new TimesheetModel(weeklyHours);
  await hours.save();
  disConnectdb();

  return hours;
}

module.exports = {
  createTimesheet,
}