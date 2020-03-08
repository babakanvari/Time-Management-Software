export const defaultState =
{
    users: [
        {
            id: "U1",
            name: "User #1",
            role: "Engineering",
            employedSince: "2008",
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
        },
        {
            id: "U2",
            name: "User #2",
            role: "Supply Chain",
            employedSince: "2008"
        },
        {
            id: "U3",
            name: "User #3",
            role: "Management",
            employedSince: "2008"
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
        },
        {
            number: "2",
            name: "Subway",
            id: "P2",
            address: "USA",
            type: "Tunnel",
            engineeringHours: "50",
            installationHours: "80",
            comissioningHours: "30"
        },
        {
            number: "3",
            name: "A&W",
            id: "P3",
            address: "Canada",
            type: "VRT",
            engineeringHours: "90",
            installationHours: "30",
            comissioningHours: "10"
        }
    ],
    tasks: [
        {
            name: "Refactor tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false,
        },
        {
            name: "Meet with CTO",
            id: "T2",
            group: "G1",
            owner: "U1",
            isComplete: true,
        },
        {
            name: "Compile ES6",
            id: "T3",
            group: "G2",
            owner: "U2",
            isComplete: false,
        },
        {
            name: "Update component snapshots",
            id: "T4",
            group: "G2",
            owner: "U1",
            isComplete: true,
        },
        {
            name: "Production optimizations",
            id: "T5",
            group: "G3",
            owner: "U1",
            isComplete: false,
        }
    ]
};