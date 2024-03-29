const projectArr = [
    {
        id: 0,
        title: 'De Royale Institute',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot sec 1 desk(e).png',
        desktopImage: 'images/Screenshot sec 1 desk(e).png',
        description: 'A web/mobile app for a tech institute which offers different couses annually',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/Capstone1/',
        source: 'https://github.com/Uthmanbello/Capstone1'
    },
    {
        id: 1,
        title: 'The 100 Series',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot 100 series app portfolio(1).png',
        desktopImage: 'images/Screenshot 100 series app portfolio(1).png',
        description: "A single page application built with JavaScript which interacts with two APIs. It is an app wherein users can 'like' respective seasons of 'The 100' series, add comments and reservations too.",
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/capstone2/dist',
        source: 'https://github.com/Uthmanbello/capstone2'
    },
    {
        id: 2,
        title: 'Bookstore',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot bookstore portfolio(1).png',
        desktopImage: 'images/Screenshot bookstore portfolio(1).png',
        description: 'Bookstore is a project that uses a Single Page Application format to display items on a page. A user can switch to two pages wherein one displays the titles and authors of books, and also a form to add a new book.',
        technologies: ['html', 'css', 'react/redux'],
        live: 'https://bookstore-17ah.onrender.com/',
        source: 'https://github.com/Uthmanbello/bookstore'
    },
    {
        id: 3,
        title: 'Weather App',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot weather app portfolio(2).png',
        desktopImage: 'images/Screenshot weather app portfolio(2).png',
        description: 'Weather App is a project that uses a Single Page Application format to display items on a page. A user can access different weather information by simply clicking on the relevant category.',
        technologies: ['html', 'css', 'react/redux'],
        live: 'https://weather-app-1unw.onrender.com/',
        source: 'https://github.com/Uthmanbello/metrics-webapp'
    },
    {
        id: 4,
        title: 'Math Magicians',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot math magicians portfolio(1).png',
        desktopImage: 'images/Screenshot math magicians portfolio(1).png',
        description: 'Math Magician is a project that uses a Single Page Application format to display items on a page. A user can switch to a page where a live calculator which can be used for computation is.',
        technologies: ['html', 'css', 'javascript'],
        live: 'https://math-magicians-3rc8.onrender.com/',
        source: 'https://github.com/Uthmanbello/math-magicians'
    },
    {
        id: 5,
        title: 'Tutoring App',
        details: ['CANOPY', 'Full Stack Dev', 2023],
        image: 'images/Screenshot Tutoring app portfolio.png',
        desktopImage: 'images/Screenshot Tutoring app portfolio.png',
        description: 'Tutoring App is a single page app that enables users to effortlessly manage classes, including adding, deleting, and viewing class details. It also provides reservation functionality, allowing users to make reservations and view their reservation details.',
        technologies: ['ruby', 'rails', 'react'],
        live: 'https://tutoring-front-end.onrender.com/',
        source: 'https://github.com/Uthmanbello/tutoring-app-frontend'
    },
    {
        id: 6,
        title: "Space Travellers' Hub",
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot Space Traveller portfolio.png',
        desktopImage: 'images/Screenshot Space Traveller portfolio.png',
        description: "Space Travellers' Hub is a project where we worked with real live data from the SpaceX API. We build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
        technologies: ['html', 'css', 'javascript'],
        live: 'https://space-travellers-hub-ns1r.onrender.com/',
        source: 'https://github.com/Uthmanbello/react_group_project'
    }
]

const popup = document.querySelector('.popup');
const worksSection = document.querySelector('.works');
const resumePopup = document.querySelector('.res-popup');

let html = '';

projectArr.forEach((project) => {
    html += `
    <section class="section">
            <section class="card-image">
                <img src="${project.image}" alt="tonic"  class="status mobile-img">
                <img src="${project.desktopImage}" class="desktop-img">
            </section>
            <section class="">
                <h2 class="head2">${project.title}</h2>
                <div class="up1">
                    <div class="p1">${project.details[0]}</div>
                    <div class="counter"></div>
                    <div class="p2">${project.details[1]}</div>
                    <div class="counter"></div>
                    <div class="p3">${project.details[2]}</div>
                </div>
                <p class="description">${project.description}</p>
                <ul class="middle">
                    <li class="back-link1 back-link">
                        <div class="link1">${project.technologies[0]}</div>
                    </li>
                    <li class="back-link2 back-link">
                        <div class="link1">${project.technologies[1]}</div>
                    </li>
                    <li class="back-link3 back-link">
                        <div class="link1">${project.technologies[2]}</div>
                    </li>
                </ul>
                <button class="see-project1 project-buttons" id="sec2-project">
                    See Project
                </button>
            </section>
    </section>`;
});

worksSection.innerHTML = html;

const projectButtons = document.querySelectorAll('.project-buttons');
const resumeButton = document.querySelector('.resume')

for (let index = 0; index < projectButtons.length; index++) {
    projectButtons[index].addEventListener('click', () => {
        const title = popup.querySelector('.popup-title');
        const detail1 = popup.querySelector('.p1')
        const detail2 = popup.querySelector('.p2')
        const detail3 = popup.querySelector('.p3')
        const tech1 = popup.querySelector('.tech1')
        const tech2 = popup.querySelector('.tech2')
        const tech3 = popup.querySelector('.tech3')
        const projDecscription = popup.querySelector('.popup-desc');
        const liveButton = popup.querySelector('.see-live');
        const sourceButton = popup.querySelector('.see-source');
        const img = popup.querySelector('img');

        title.textContent = projectArr[index].title;
        detail1.textContent = projectArr[index].details[0];
        detail2.textContent = projectArr[index].details[1];
        detail3.textContent = projectArr[index].details[2];
        tech1.textContent = projectArr[index].technologies[0];
        tech2.textContent = projectArr[index].technologies[1];
        tech3.textContent = projectArr[index].technologies[2];
        projDecscription.textContent = projectArr[index].description;
        liveButton.setAttribute('href', projectArr[index].live);
        sourceButton.setAttribute('href', projectArr[index].source);

        img.src = projectArr[index].image;
        img.srcset = projectArr[index].desktopImage
        
        popup.classList.remove('d-none')
        document.body.style.overflowY = 'hidden';
    })
    
}

resumeButton.addEventListener('click', () => {
    const title = popup.querySelector('.res-popup-title');
    resumePopup.classList.remove('d-none')
    document.body.style.overflowY = 'hidden';
})

const resBtnClosePopup = document.querySelector('.res-popup-close');
resBtnClosePopup.addEventListener('click', () => {
    resumePopup.classList.add('d-none');
    document.body.style.overflowY = 'auto';
})

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('d-none');
    document.body.style.overflowY = 'auto';
})