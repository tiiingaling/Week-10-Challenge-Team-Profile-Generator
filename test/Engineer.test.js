const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("Testing constructor", () =>{

    const name = 'Ting';
    const id = 1;
    const email = 'ting@bootcamp.com';
    const github = 'tiiingaling';
    const role = 'Engineer';

    const obj = new Engineer(name, id, email,github);

    //tests that the above parameters match the class parameters
    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
    expect(obj.github).toEqual(github);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getGithub()).toEqual(github);
    expect(obj.getRole()).toEqual(role);
    });
});