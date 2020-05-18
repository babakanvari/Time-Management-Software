const { createTimesheet } = require('../dataAccess/timesheet');

//Insert weeklyHours
const insertWeeklyHours = async (weeklyHours) => {
    let hours = await createTimesheet(weeklyHours);
    console.log(hours);
}

//TODO
//Find weeklyHours
//Update weeklyHours