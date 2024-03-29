
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

createEmployeeRecord(["Gray", "Worm", "Security", 1])


function createEmployeeRecords (arrayOfArrays) {
    let newArray = []
    arrayOfArrays.forEach(array => {
        newArray.push(createEmployeeRecord(array))
    })
    return newArray
}

createEmployeeRecords([
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ])


function createTimeInEvent (record, dateStamp) {
    let hourVar = Number(dateStamp.slice(11,15))
    let dateVar = dateStamp.slice(0,10)

    let timeStampInObject = {
        type: 'TimeIn',
        hour: hourVar,
        date: dateVar
    }

    record.timeInEvents = [timeStampInObject]
    return record
}

createTimeInEvent(createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]),"2024-03-27-900")


function createTimeOutEvent (record, dateStamp) {
    let hourVar = Number(dateStamp.slice(11,15))
    let dateVar = dateStamp.slice(0,10)

    let timeStampOutObject = {
        type: 'TimeOut',
        hour: hourVar,
        date: dateVar
    }

    record.timeOutEvents = [timeStampOutObject]
    return record
}

createTimeOutEvent(createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]),"2024-03-27-1700")


function hoursWorkedOnDate(record, date) {
    let timeInObject = createTimeInEvent(record, "0044-03-15 0900")
    let timeOutObject = createTimeOutEvent(record, "0044-03-15 1100")

    let militaryHoursWorked = (timeOutObject.timeOutEvents[0].hour) - (timeInObject.timeInEvents[0].hour)
    if (militaryHoursWorked >= 1000) {
        let hoursWorked = militaryHoursWorked.toString().slice(0,2)
        return Number(hoursWorked)
    } else {
        let hoursWorked = militaryHoursWorked.toString().slice(0,1)
        return Number(hoursWorked)
    }
}

hoursWorkedOnDate(createEmployeeRecord(["Julius", "Caesar", "General", 1000]),"0044-03-15")


function wagesEarnedOnDate (record, date) {
    let hoursWorked = hoursWorkedOnDate(record, date)
    let payOwed = hoursWorked * (record.payPerHour)
    return payOwed
}

wagesEarnedOnDate(createEmployeeRecord(["Julius", "Caesar", "General", 27]),"0044-03-15")


function allWagesFor (record, date) {
    let payOwed1 = wagesEarnedOnDate (record, date)

    let timeInObject = createTimeInEvent(record, "0044-03-14 0900")

    let timeOutObject = createTimeOutEvent(record, "0044-03-15 2100")

    let militaryHoursWorked = (timeOutObject.timeOutEvents[0].hour) - (timeInObject.timeInEvents[0].hour)
    if (militaryHoursWorked >= 1000) {
        let hoursWorked = militaryHoursWorked.toString().slice(0,2)
        Number(hoursWorked)
        let payOwed2 = hoursWorked * (record.payPerHour)
        let totalPayOwed = payOwed1 + payOwed2
        return totalPayOwed
    } else {
        let hoursWorked = militaryHoursWorked.toString().slice(0,1)
        Number(hoursWorked)
        let payOwed2 = hoursWorked * (record.payPerHour)
        let totalPayOwed = payOwed1 + payOwed2
        return totalPayOwed
    }
}

(allWagesFor(createEmployeeRecord(["Julius", "Caesar", "General", 27]),"0044-03-15"))


function calculatePayroll (record) {

}

calculatePayroll([["Rafiki", "", "Aide", 10],["Simba", "", "King", 100]])
