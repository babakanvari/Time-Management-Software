export class Timesheet {
    constructor({ _id, userId, weekEnd, data }) {
        this._id = _id;
        this.userId = userId;
        this.data = data;
        this.weekEnd = weekEnd;
        this.weekEnding = this.weekEnding;
    }
    static deconstructDate(date) {
        date = new Date(date);
        return ({
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        })
    }
}