(function fadeInSlideInit(){
    /*フェードインスライダー*/
    let slideIndex = 0;
    const slideImages = document.querySelectorAll('.fade_slide img');

    function fadeSlideShow() {
        for(let i =0; i < slideImages.length; i++) {
            if(i === slideIndex) {
                slideImages[i].classList.add('active');
            }else{
                slideImages[i].classList.remove('active');
            }
        }
            slideIndex++;
        if (slideIndex >= slideImages.length) {
            slideIndex = 0;
        }
    }
    fadeSlideShow();
    setInterval(fadeSlideShow, 3000);
})();