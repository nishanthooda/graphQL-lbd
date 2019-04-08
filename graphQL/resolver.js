const employeeData = require('../data/employees')

module.exports = {
    employees: function() {
        return Object.values(employeeData);
    },
    employee: function({ email }) {
        let employee = employeeData[email]
        return employee
    },
    createEmployee: function({ employeeInput }, req) {
        console.log(employeeInput)
        console.log(req);

        let savedEmployee = {
            name: "savedNishant",
            email: "savedNishant@tribalscale.com",
            age: employeeInput.daysSinceBirth > 1000,
            height: 6.4,
            isTall: employeeInput.height > 5.5
        }

        return savedEmployee
    },
    deleteEmployee: function(args, req) {
        console.log(args.email)
    }
}