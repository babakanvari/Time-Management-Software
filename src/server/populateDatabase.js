import * as userServices from './services/user';
import * as projectServices from './services/project';
import * as timesheetServices from './services/timesheet';
import { disConnectdb } from './dataAccess/database';
const mongoose = require('mongoose');

// populate data for testing
export const populateDatabase = async () => {
    try {
        let user1 = await userServices.register(initialData.user1);
        let user2 = await userServices.register(initialData.user2);
        let project1 = await projectServices.create(initialData.project1);
        let project2 = await projectServices.create(initialData.project2);

        user1 = await userServices.find(initialData.user1.email);
        initialData.timesheet1.userId = user1.id;
        project1 = await projectServices.find(initialData.project1.number);
        initialData.timesheet1.data[0].projectId = project1.id;
        initialData.timesheet1.data[1].projectId = project1.id;
        initialData.timesheet1.data[2].projectId = project1.id;
        let timesheet1 = await timesheetServices.create(initialData.timesheet1);
        console.log('Data Was successfully populated');
    }
    catch{
        console.log('Database was already populated');
    }
    disConnectdb();
}

let initialData = {
    user1: {
        firstName: "Babak",
        lastName: "Anvari",
        email: "babak.anv@gmail.com",
        password: "test",
        currentPosition: "Software Developer",
        employmentDate: 2016,
    },
    user2: {
        firstName: "James",
        lastName: "Smith",
        email: "james.smith@gmail.com",
        password: "test",
        currentPosition: "Software Developer",
        employmentDate: 2016,
    },
    project1: {
        number: "1",
        address: "Richmond, Canada",
    },
    project2: {
        number: "2",
        address: "Vancouver, Canada",
    },
    timesheet1: {
        year: 2020,
        week: 1,
        userId: "",
        data: [
            {
                date: 2016,
                activity: "A-200",
                category: "Z-ENG",
                transactionText: "Assembly 1",
                hour: 6,
                projectId: "",
            },
            {
                date: 2016,
                activity: "A-200",
                category: "Z-ENG",
                transactionText: "Assembly 2",
                hour: 5,
                projectId: "",
            },
            {
                date: 2016,
                activity: "A-200",
                category: "Z-ENG",
                transactionText: "Assembly 3",
                hour: 4,
                projectId: "",
            }
        ]
    }
}

populateDatabase();