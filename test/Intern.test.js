const Intern = require("../lib/Intern");

describe('Intern', () => {
    it("Testing constructor", () =>{

    const name = 'Ting';
    const id = 1;
    const email = 'ting@bootcamp.com';
    const school = 'university of leicester';
    const role = 'Intern';

    const obj = new Intern(name, id, email, school);

    //tests that the above parameters match the class parameters
    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
    expect(obj.school).toEqual(school);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    })
})
