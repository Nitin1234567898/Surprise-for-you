const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const mainContent = document.getElementById('main-content');
const finalContent = document.getElementById('final-content');

// Function to move the "No" button to a random position
function moveNoButton() {
    // Get random coordinates within the viewport
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Add hover and touch event listeners for the "No" button
noButton.addEventListener('mouseover', moveNoButton); // For desktop
noButton.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    setTimeout(moveNoButton, 100); // Add a small delay
});

// Show the final screen when "Yes" is clicked
yesButton.addEventListener('click', () => {
    mainContent.style.display = 'none'; // Hide initial content
    finalContent.style.display = 'block'; // Show final content
});
