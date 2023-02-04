const Employee = require("../lib/Employee");

describe('Employee', () => {
    it("Testing constructor", () =>{

    const name = 'Ting';
    const id = 1;
    const email = 'ting@bootcamp.com';
    const role = 'Employee';

    const obj = new Employee(name, id, email);

    //tests that the above parameters match the class parameters
    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    })
})