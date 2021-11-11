function appear() {
    let intouchText = document.querySelector('.box-opacity');
    let introPosition = intouchText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.0;
    
    if (introPosition == screenPosition) {
        introText.classList.add('box-inside');
    }
}

window.addEventListener('scroll', scrollAppear); 
