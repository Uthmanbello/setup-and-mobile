// const arr = [
//     {
//         title: 'Multi-Post Stories',
//         desktop_title: 'Uber Navigation',
//         description: 'description'
//     },
//     {
//         title: 'title',
//         description: 'description'
//     }
// ]

// const createHTML = (el) => {
//     const cnt = document.createElement('div');
//     const popupTitle = document.createElement('h2');
//     popupTitle.textContent = el.title;
//     popupTitle.classList.add('class 1', 'class 2');
//     const popupDesc = document.createElement('p');
//     popupDesc.textContent = el.description;
//     cnt.appendChild(popupTitle);
//     cnt.appendChild(popupDesc);
//     return cnt;
// }
const popup = document.querySelector('.popup');

// for (let el of arr) {
//     const cnt = createHTML(el);
//     containerOfAllWorks.appendChild(cnt);
// }
const seeProject1 = document.querySelector('#sec2-project')
seeProject1.addEventListener('click', () => {
    popup.classList.remove('d-none');
}) 

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('d-none');
})