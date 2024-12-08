const noButton = document.getElementById('no');
const yesButton=document.getElementById('yes');
const mainContent = document.getElementById('main-content');
const finalContent = document.getElementById('final-content');
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
yesButton.addEventListener('click',()=>{
    mainContent.style.display = 'none'; // Hide the initial content
    finalContent.style.display = 'block';
});