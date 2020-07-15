$(document).ready(function() {
    const leftBtn = document.getElementById('left-arrow');
    const rightBtn = document.getElementById('right-arrow');

    const leftImage = document.querySelector('.left-image');
    const centerImage = document.querySelector('.center-image');
    const rightImage = document.querySelector('.right-image');

    const alignDiv = document.querySelectorAll('.align');

    console.log(centerImage.clientWidth);
     console.log(leftImage.clientWidth); 
                           let index = 0;

    alignDiv.forEach(val => {
        val.style.transition = "0.4s ease-in-out";
    })

    leftBtn.addEventListener('click', () => {
        
    })

    rightBtn.addEventListener('click', () => {
        
    })
})