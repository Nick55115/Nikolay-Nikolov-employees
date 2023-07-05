//util function that itterates the array of employees and finds the longest working pair and their projects
//the time complexity of this function can be considered O(n^2), where n is the number of rows in the CSV file or the length of the employees array.
export const commonProjectsOfThePair = (employees) => {
    const result = [];
    for (let i = 0; i < employees.length; i++) {
        for (let y = 0; y < employees.length; y++) {
            if (employees[i].EmpID !== employees[y].EmpID && employees[i].ProjectID === employees[y].ProjectID) {
                if (
                    new Date(employees[i].DateFrom).valueOf() < new Date(employees[y].DateFrom).valueOf() &&
                    (
                        new Date(employees[i].DateTo).valueOf() > new Date(employees[y].DateFrom).valueOf() ||
                        (new Date().valueOf() > new Date(employees[y].DateFrom).valueOf() && employees[i].DateTo === 'null')
                    )
                ) {
                    let differenceInTime = (new Date(employees[i].DateTo).valueOf() || new Date().valueOf()) - new Date(employees[y].DateFrom).valueOf();
                    let totalDays = differenceInTime / (1000 * 3600 * 24) + 1;
                    result.push({
                        id: employees[i].ProjectID,
                        firstEmployee: employees[i].EmpID,
                        secondEmployee: employees[y].EmpID,
                        projectId: employees[i].ProjectID,
                        days: totalDays.toFixed(0)
                    });
                }
            }
        }
    }
    return result;
}
