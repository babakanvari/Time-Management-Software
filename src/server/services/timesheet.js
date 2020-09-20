const { createTimesheet } = require('../dataAccess/timesheet');
import * as dataAccess from '../dataAccess/timesheet';
import { Timesheet, TimesheetDateFormatter } from '../entities/timesheet'

//Create timesheet
export const create = async (weeklyHours) => {
    console.log('timesheet-service-create');
    weeklyHours = new Timesheet(weeklyHours);
    if (!weeklyHours.weekEnding) {
        weeklyHours.weekEnding = Timesheet.deconstructDate(weeklyHours.weekEnd);
    }
    console.log(weeklyHours);
    weeklyHours = await dataAccess.create(weeklyHours);
    weeklyHours = new Timesheet(weeklyHours);
    return timesheet;
}

//Find timesheet
export const find = async (weekEnd, userId) => {
    console.log('timesheet-service-find');
    let weekEnding = Timesheet.deconstructDate(weekEnd);
    return await dataAccess.find(weekEnding, userId);
}

//Update timesheet
export const update = async (weeklyHours) => {
    console.log('timesheet-service-update');
    weeklyHours = new Timesheet(weeklyHours);
    if (!weeklyHours.weekEnding) {
        weeklyHours.weekEnding = Timesheet.deconstructDate(weeklyHours.weekEnd);
    }
    weeklyHours = await dataAccess.update(weeklyHours);
    weeklyHours = new Timesheet(weeklyHours);
    return weeklyHours;
}