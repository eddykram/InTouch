// function that makes the scrolling effect happen
function scrollAppear() {
    //Variables that will be attaced to the scrolling effect
    let introText = document.querySelector('.scroll-effect1');
    let introText2 = document.querySelector('.scroll-effect2');
    let introText3 = document.querySelector('.scroll-effect3');
    let introText4 = document.querySelector('.scroll-effect4');
    let introText5 = document.querySelector('.scroll-effect5');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    let screenPosition2 = window.innerHeight / 1.8;
    let screenPosition3 = window.innerHeight / 3.8;
    let screenPosition4 = window.innerHeight / 4.8;
    let screenPosition5 = window.innerHeight / 13;

    // if statements that make the scroll function work
    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }

    if (introPosition < screenPosition2) {
        introText2.classList.add('intro-appear');
    }

    if (introPosition < screenPosition3) {
        introText3.classList.add('intro-appear');
    }

    if (introPosition < screenPosition4) {
        introText4.classList.add('intro-appear');
    }

    if (introPosition < screenPosition5) {
        introText5.classList.add('intro-appear');
    }
}

    window.addEventListener('scroll', scrollAppear); 

    

