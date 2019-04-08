module.exports = {
    employees: function() {
        return [{
            name: "nishant",
            email: "nishant@tribalscale.com",
            age: 38,
            height: 6.4,
            isTall: false
        }];
    },
    employee: function(args) {
        console.log(args)
        return {
            name: "employeenishant",
            email: "nishant@tribalscale.com",
            age: 38,
            height: 6.4,
            isTall: false
        }
    },
    createEmployee: function(args, req) {
        console.log(args.employeeInput)
        console.log(req);

        let savedEmployee = {
            name: "savedNishant",
            email: "savedNishant@tribalscale.com",
            age: 38,
            height: 6.4,
            isTall: false
        }

        return savedEmployee
    },
    deleteEmployee: function(args, req) {
        console.log(args.email)
    }
}