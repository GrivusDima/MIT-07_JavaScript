// let student = {
//     name: 'John Doe',
//     role: 'student'
// }
// // DOM
// console.log(student.name);
// console.log(student.role);

// let heading = document.getElementsByTagName('li');
// let headingId = document.getElementById('profile-name')
// let skills = document.getElementsByClassName('skill');

// let skills2 = document.querySelector('.skills');
// let skills = document.querySelectorAll('.skills');
// for (let skill of skills) {
//     console.log(skill)
// }

let student = {
    name: 'dmytro',
    role: 'student',
    city: 'kyiv',
    portfolio: 'git'
}

let nameElement = document.querySelector('#profile-name');
let roleElement = document.querySelector('.profile-role');
let cityElement = document.querySelector('#profile-city');
let portfolioElement = document.querySelector('#profile-portfolio');

nameElement.textContent = student.name;
// roleElement.textContent = student.role;
cityElement.textContent = student.city;

roleElement.innerHTML = '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', student.portfolio);
let skillsElement = document.querySelectorAll('.skill');

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
skillsElement[0].textContent = 'HTML';
skillsElement[1].textContent = 'CSS';
skillsElement[2].textContent = 'JavaScript';

for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}
