const projectArr = [
    {
        id: 0,
        title: 'Tonic',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'images/sec2 mobile.svg',
        desktopImage: 'images/section 2 desk.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
const projectButtons = document.querySelectorAll('.project-buttons');
const worksSection = document.querySelector('.works');
let html = '';
projectArr.forEach((project) => {
    html += `
    <section class="section">
            <section class="border-box sec">
                <div class="sec-left">
                <img src="${project.image}" alt="tonic"  class="status">
                <img src="${project.desktopImage}">
                <h2 class="head2">${project.title}</h2>
                <div class="up1 unique">
                    <div class="p1">${project.details[0]}</div>
                    <div class="counter"></div>
                    <div class="p2">${project.details[1]}</div>
                    <div class="counter"></div>
                    <div class="p3">${project.details[2]}</div>
                </div>
                </div>
            </section>
            <section class="down unique1">
                <p class="p41 p41d">${project.description}</p>
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
                <button class="see-project1 project-buttons unique2">
                    <div class="see-project" id="sec2-project">See Project</div>
                </button>
            </section>
    </section>`;
});

worksSection.innerHTML = html;

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

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('d-none');
})