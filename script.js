const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or light images
function modeHelper(mode) {
    toggleIcon.children[0].textContent = `${mode} Mode`;
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_conceptual_idea_${mode}.svg`;
    image3.src = `img/undraw_feeling_proud_${mode}.svg`;
}

function darkModeToggle(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 60%)' : 'rgb(0 0 0 / 60%)';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? modeHelper('Dark') : modeHelper('Light');
}

// Switch theme
function swtichTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark') // Set the entire document at the <html> level to have a custom attribute of data-theme='dark'
        localStorage.setItem('theme', 'dark');
        darkModeToggle(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeToggle(false);
    }
}

// Event listener
toggleSwitch.addEventListener('change', swtichTheme);

// Get mode from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkModeToggle(true);
    }
}