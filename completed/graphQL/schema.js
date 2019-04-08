const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Salary {
        amount: Float!
        currency: String!
    }

    type Employee {
        name: String!
        email: String!
        age: Int!
        isTall: Boolean!
        salary: Salary!
    }

    input EmployeeData {
        name: String!
        email: String!
        daysSinceBirth: Int!
        height: Float!
    }

    type RootQuery {
        employees: [Employee!]
        employee(email: String!): Employee
    }

    type RootMutation {
        createEmployee(employeeInput: EmployeeData): Employee!
        deleteEmployee(email: String!) : Employee
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
