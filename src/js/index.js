function themeSwitcher() {
    const root = document.querySelector(':root');
    const main = document.querySelector('main');
    const theme = document.querySelector('.dark-mode');

    if (main.dataset.theme === 'dark') {
        theme.textContent = 'dark_mode';

        root.style.setProperty('--background-color', '#FFF3C7');
        root.style.setProperty('--header-color', '#FEC7B4');
        root.style.setProperty('--text-color', '#FC819E');
        root.style.setProperty('--text-color-secondary', '#F7418F');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--background-color', '#222831');
        root.style.setProperty('--text-color', '#adb5bd');
        root.style.setProperty('--text-color-secondary', '#76ABAE');
        root.style.setProperty('--header-color', '#31363F');
        main.dataset.theme = 'dark';
        theme.textContent = 'light_mode';
    }
}

document.querySelector('.dark-mode').addEventListener('click', themeSwitcher);

function splashImageSlide() {
    const splashImage = document.querySelector('.splash_light img');
    let currentImageIndex = 1;

    function showNextImage() {
        currentImageIndex = (currentImageIndex % 4) + 1;
        splashImage.src = `./src/img/rose${currentImageIndex}.png`;
    }

    setInterval(showNextImage, 3000);
};

splashImageSlide()

function hamburguerMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navList = document.querySelector('.navbar ul');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
        navList.style.display = 'flex';
        menuIcon.textContent = 'close';
    });

    closeIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'inline';
        navList.style.display = 'none';
        menuIcon.textContent = 'menu';
    });
};

document.querySelector('.menu-icon').addEventListener('click', hamburguerMenu)

