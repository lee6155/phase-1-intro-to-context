
function createEmployeeRecord (array) {
    let testEmployee = {
        firstName: '',
        familyName: '',
        title: '',
        payPerHour: ''
    }
    testEmployee.firstName = array[0]
    testEmployee.familyName = array[1]
    testEmployee.title = array[2]
    testEmployee.payPerHour = array[3]

    testEmployee.timeInEvents = []
    testEmployee.timeOutEvents = []

    return testEmployee
}

createEmployeeRecord()


function createEmployeeRecords (array1, array2) {
    let employeeRecords = [[array1],[array2]]
    console.log(employeeRecords.length)
}

createEmployeeRecords()


