const projectArr = [
    {
        id: 0,
        title: 'Tonic',
        details: ['CANOPY', 'Back End Dev', 2015],
        image: 'images/sec2 mobile.svg',
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
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
        technologies: ['html', 'css', 'javaScript']
        live: 'https://uthmanbello.github.io/setup-and-mobile/',
        source: 'https://github.com/Uthmanbello/setup-and-mobile'
    }
]

const popup = document.querySelector('.popup');
const projectButtons = document.querySelectorAll('.project-buttons');

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