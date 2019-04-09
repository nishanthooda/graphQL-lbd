const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    "Includes all the information about employee salaries."
    type Salary {
        amount: Float!
        currency: String!
    }

    "Includes all the information about employees."
    type Employee {
        name: String!
        email: String!
        age: Int!
        isTall: Boolean!
        salary: Salary!
    }

    "Information required to create an employee."
    input EmployeeData {
        name: String!
        email: String!
        daysSinceBirth: Int!
        height: Float!
    }

    "All the defined queries."
    type RootQuery {
        "Returns a list of all employees."
        employees: [Employee!]
        "Returns a single employee."
        employee(email: String!): Employee
    }

    type RootMutation {
        "Creates an employee."
        createEmployee(employeeInput: EmployeeData): Employee!
        "Deletes an employee."
        deleteEmployee(email: String!) : Employee
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
