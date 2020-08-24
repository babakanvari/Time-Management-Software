export class Timesheet {
    constructor({ _id, userId, year, week, status, data }) {
        this.id = _id;
        this.userId = userId;
        this.year = year;
        this.week = week;
        this.status = status;
        this.data = data;
    }
}