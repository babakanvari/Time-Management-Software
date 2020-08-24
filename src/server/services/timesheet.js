const { createTimesheet } = require('../dataAccess/timesheet');
import * as dataAccess from '../dataAccess/timesheet';

//Create timesheet
export const create = async (weeklyHours) => {
    console.log('timesheet-service-create');
    return await dataAccess.create(weeklyHours);
}

//Find timesheet
export const find = async (year, week, userId) => {
    console.log('timesheet-service-find');
    return await dataAccess.find(year, week, userId);
}

//Update timesheet
export const update = async (weeklyHours) => {
    console.log('timesheet-service-update');
    return await dataAccess.update(weeklyHours);

}