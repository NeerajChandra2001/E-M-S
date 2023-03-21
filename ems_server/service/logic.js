//import db
const db = require('./db');

//get all employees
const allEmployee = () => {
    return db.Employee.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    employees: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'employee not found'
                }
            }
        }
    )
}

//add  employees
const addEmployee = (id, empname, age, designation, salary) => {
    return db.Employee.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 401,
                    message: 'employee already exists'
                }
            }
            else {
                const newEmployee = new db.Employee({ id, empname, age, designation, salary })
                newEmployee.save();
                return {
                    statusCode: 200,
                    message: 'Employee added successfully'
                }
            }
        }
    )
}




//delete  employees
const delEmployee = (id) => {
    return db.Employee.deleteOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    message: 'Employee deleted successfully'
                }
            }
            else {
                const newEmployee = new db.Employee({ id, empname, age, designation, salary })
                newEmployee.save();

                return {
                    statusCode: 404,
                    message: 'no data'
                }
            }
        }
    )
}




//det a particular employee details  employees
const getAnEmployee = (id) => {
    return db.Employee.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    employee: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'employee not found'
                }
            }
        }
    )
}

module.exports = {
    allEmployee,
    addEmployee,
    delEmployee,getAnEmployee
}