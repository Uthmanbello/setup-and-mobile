const projectArr = [
    {
        id: 0,
        title: 'De Royale Institute App',
        details: ['CANOPY', 'Front End Dev', 2023],
        image: 'images/Screenshot sec 1 desk(e).png',
        desktopImage: 'images/Screenshot sec 1 desk(e).png',
        description: 'A web/mobile app for a tech institute which offers different couses annually',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/setup-and-mobile/',
        source: 'https://github.com/Uthmanbello/setup-and-mobile'
    },
    {
        id: 1,
        title: 'Multi-Post Stories',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'images/Snapshoot Portfolio (1).png',
        desktopImage: 'images/section 3 desk.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/setup-and-mobile/',
        source: 'https://github.com/Uthmanbello/setup-and-mobile'
    },
    {
        id: 2,
        title: 'Tonic',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'images/Snapshoot Portfolio (2).png',
        desktopImage: 'images/section 4 desk.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/setup-and-mobile/',
        source: 'https://github.com/Uthmanbello/setup-and-mobile'
    },
    {
        id: 3,
        title: 'Multi-Post Stories',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'images/Snapshoot Portfolio (3).png',
        desktopImage: 'images/section 5 desk.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript'],
        live: 'https://uthmanbello.github.io/setup-and-mobile/',
        source: 'https://github.com/Uthmanbello/setup-and-mobile'
    }
]

const popup = document.querySelector('.popup');
const worksSection = document.querySelector('.works');
const resumePopup = document.querySelector('.res-popup');

let html = '';

projectArr.forEach((project) => {
    html += `
    <section class="section">
            <section>
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
                        <div class="link2">${project.technologies[1]}</div>
                    </li>
                    <li class="back-link3 back-link">
                        <div class="link3">${project.technologies[2]}</div>
                    </li>
                </ul>
                <button class="see-project1 project-buttons">
                    <div class="see-project" id="sec2-project">See Project</div>
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
        const img = popup.querySelector('img');
        title.textContent = projectArr[index].title;

        img.src = projectArr[index].image;
        img.srcset = projectArr[index].desktopImage
        popup.classList.remove('d-none')
    })
    
}

resumeButton.addEventListener('click', () => {
    const title = popup.querySelector('.res-popup-title');
    resumePopup.classList.remove('d-none')
})

const resBtnClosePopup = document.querySelector('.res-popup-close');
resBtnClosePopup.addEventListener('click', () => {
    resumePopup.classList.add('d-none');
})

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('d-none');
})