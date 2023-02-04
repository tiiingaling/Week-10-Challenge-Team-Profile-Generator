const Manager = require("../lib/Manager");

describe('Manager', () => {
    it("Testing constructor", () =>{

    const name = 'Ting'
    const id = 1;
    const email = 'ting@bootcamp.com'
    const officeNumber = '1';
    const role = 'Manager';

    const obj = new Manager(name, id, email, officeNumber);

    //tests that the above parameters match the class parameters
    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
    expect(obj.officeNumber).toEqual(officeNumber);
    
    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    });
});