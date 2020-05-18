let weekMock = {
    weekNumber: Math.random(),
    userId: '5ea13cf6880b2050c85aefcb',
    status: 'submitted',
    hours: [
        {
            // date: Date,
            // projectNumber: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: "project"
            // },
            activity: 'String',
            category: 'String',
            transactionText: 'String',
            hour: 34,
        }
    ]
}

let userMock1 = {
    // email: Math.random().toString(36).substring(7),
    email: 'babak',
    firstName: 'Babak',
    lastName: 'Anvari',
    currentPosition: 'Mechanical Engineer',
    employmentDate: '04/22/2020',
}

let userMock2 = {
    _id: '5ea3a86acbf03c6094789d69',
    email: 'babak',
    firstName: 'Babakkk',
    lastName: 'pesarrr',
    currentPosition: 'Engineerrr',
    employmentDate: '',
}

module.exports = {
    weekMock,
    userMock1,
    userMock2
};