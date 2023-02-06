const fs = require('fs');

//pulls the classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const buildTeam = (managers,engineers,interns) => {
    // pulls the template file to use
    let html = fs.readFileSync('./template/index.html');
    if (html){

        // adds manager to html, with += enhanced assignment
        let managerHtml = '';
        managers.forEach(manager => {
            managerHtml += `<div class="card">
            <div class="card-content">
                <h2>${manager.role}</h2>
                <h3>${manager.name}</h3>
                <p>Employee ID #: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Telephone Number: ${manager.officeNumber}</p>
            </div>
        </div>`;
        })

        // adds engineers to html
        let engineerHtml = '';
        engineers.forEach(engineer => {
            engineerHtml += `<div class="card">
            <div class="card-content">
                <h2>${engineer.role}</h2>
                <h3>${engineer.name}</h3>
                <p>Employee ID #: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${manager.email}">${engineer.github}</a></p>
            </div>
        </div>`;
        })

         // adds interns to html
         let internHtml = '';
         interns.forEach(intern => {
             internHtml += `<div class="card">
             <div class="card-content">
                 <h2>${intern.role}</h2>
                 <h3>${intern.name}</h3>
                 <p>Employee ID #: ${intern.id}</p>
                 <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                 <p>School: ${intern.school}</p>
             </div>
         </div>`;
         })

    }
}