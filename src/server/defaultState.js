export const defaultState =
{
    users: [
        {
            id: "User ID",
            firstName: "Fist Name",
            lastName: "Last Name",
            currentPosition: "Position",
            employmentDate: "Employment Date",
            timeSheet:
                [
                    {
                        year: 2019,
                        week:
                            [
                                {
                                    number: 1,
                                    day: "Saturday",
                                    tasks:
                                        [
                                            {
                                                projectID: "p1",
                                                assembly: "CIP",
                                                hour: "4",
                                            }
                                        ]
                                }
                            ]
                    }
                ]
        }
    ],
    projects: [
        {
            number: "1",
            name: "MCdonald",
            id: "P1",
            address: "USA",
            type: "Spiral",
            engineeringHours: "50",
            installationHours: "90",
            comissioningHours: "20"
        }
    ],
    tasks: [
        {
            name: "Refactor tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false,
        }
    ]
};