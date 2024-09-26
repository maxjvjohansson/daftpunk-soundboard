const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    
        const soundPath = button.getAttribute('data-sound');

      
        const audio = new Audio(soundPath);
        audio.play();
    });
});