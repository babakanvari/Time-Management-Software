// Check if the project is already created.
export const project = (projectNumber, allProjects) => {
    return new Promise(function (res, rej) {
        if (projectNumber && allProjects) {
            let project = allProjects.find((project) => (project.number == projectNumber));
            console.log(project);
            (project) ? res(project._id) : rej(new Error(`Project ${projectNumber} is not defined yet !!! you have to define the project prior to submit the timesheet`))
        }
        else {
            rej(new Error('list of all projects is not available'));
        }
    })
}