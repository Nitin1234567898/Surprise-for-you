const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const mainContent = document.getElementById('main-content');
const finalContent = document.getElementById('final-content');


function move(){
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
};
noButton.addEventListener('mouseover', move); // For desktops
noButton.addEventListener('touchstart', move); // For mobile

yesButton.addEventListener('click', () => {
    mainContent.style.display = 'none'; 
    finalContent.style.display = 'block'; /
});
