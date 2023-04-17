const frameworks = document.querySelector('.frame-txt');
const skills = document.querySelector('.skill-txt');
const frameList = document.querySelector('.frame-list');
const skillList = document.querySelector('.skill-list');
const listRule1 = document.querySelector('.list-rule1');
const listRule2 = document.querySelector('.list-rule2');

frameworks.addEventListener('click', () => {
  frameList.classList.toggle('d-none');
  listRule1.classList.toggle('d-none');
})

skills.addEventListener('click', () => {
  skillList.classList.toggle('d-none');
  listRule2.classList.toggle('d-none');
})