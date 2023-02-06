const Employee = require ("./Employee")

//extends from base Employee
class Manager extends Employee {
    constructor(name, id, email, officeManager) {
        super(name, id, email);
        this.officeNumber = officeManager;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
