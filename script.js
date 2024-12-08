const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const mainContent = document.getElementById('main-content');
const finalContent = document.getElementById('final-content');

// Function to move the "No" button to a random position
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

noButton.addEventListener('mouseover', moveNoButton);

// For mobile, use 'touchstart' event to move the "No" button
noButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    setTimeout(moveNoButton, 100); 

// Show the final screen when "Yes" is clicked
yesButton.addEventListener('click', () => {
    mainContent.style.display = 'none'; 
    finalContent.style.display = 'block'; 
});
