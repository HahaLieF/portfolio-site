(function slideInit(){
//デスクトップ・タブレット側スライダー
    const slides = document.querySelectorAll('.slides_image img');
    const slideTrack = document.querySelector('.slide_track');
    const indicators = document.querySelectorAll('.indicator li');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    //現在のスライドの枚数を管理
    let currentSlide= 0;
    //一枚あたりのスライド画像の幅を取得
    const slideWidth = slides[0].clientWidth +10;

    nextBtn.addEventListener('click', nextClick);
    prevBtn.addEventListener('click', prevClick);


    const slideInterval = 3000;
    let autoSlide = setInterval(() => {
        nextClick();
    }, slideInterval);


    function nextClick() {
        currentSlide++
        if(currentSlide > 4) {
            currentSlide = slides.length = 0;
        }
        updateIndex(); // 表示位置を更新
        updateIndicators();
    };
    function prevClick() {
        currentSlide--;
        if(currentSlide < 0) {
            currentSlide = slides.length - 1;
        };
        updateIndex(); //表示位置を更新
        updateIndicators(); //インジゲーターが動く
    };


    function updateIndex() {
        //左へ1枚分スライド（＝1枚左に見せる）
        slideTrack.style.transition = 'transform 0.3s ease';
        slideTrack.style.transform = `translateX(-${slideWidth}px)`;
        //先頭の画像を最後尾に移動
        const lastSlide = slideTrack.lastElementChild;
        const firstSlide = slideTrack.firstElementChild;
        slideTrack.insertBefore(lastSlide, firstSlide);
        requestAnimationFrame(() => {
            slideTrack.style.transition ='transform 0.5s ease';
            slideTrack.style.transform ='translateX(0)';
        });
    };


    function updateIndicators() {
        indicators.forEach((indicator, index) =>{
            indicator.classList.remove('active');
            if(index === currentSlide) {
                indicator.classList.toggle('active');
            };
        });
    };

    const slider = document.querySelector('#slider');

    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextClick();
        }, slideInterval);
    });
})();