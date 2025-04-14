(function slideInit(){
//デスクトップ・タブレット側スライダー
    //スライド画像の要素を取得
    const slides = document.querySelectorAll('.slides_image img');
    //スライド全体の画像要素を取得
    const slideTrack = document.querySelector('.slide_track');
    //スライダー下部のインジゲーターを取得
    const indicators = document.querySelectorAll('.indicator li');
    //prevボタンを取得
    const nextBtn = document.querySelector('.next');
    //nextボタンを取得
    const prevBtn = document.querySelector('.prev');
    //現在のスライドの番号を管理
    let currentSlide= 0;
    //一枚あたりのスライド画像の幅を取得(+10pxはスライド間の余白の調整)
    const slideWidth = slides[0].clientWidth +10;
    //nextボタンをクリックした時のイベント設定
    nextBtn.addEventListener('click', nextClick);
    //prvボタンをクリックした時のイベント設定
    prevBtn.addEventListener('click', prevClick);

    //自動スライド設定(3秒毎にスライドが一枚ずつ進む)
    const slideInterval = 3000;
    let autoSlide = setInterval(() => {
        //次のスライドを処理
        nextClick();
    }, slideInterval);


    function nextClick() {
        //スライド番号を一つ進める
        currentSlide++;
        //最後のスライドを超えたら、最初に戻る(ループ)
        if (currentSlide > slides.length - 1) {
            currentSlide = 0;
        }
        //スライドの表示位置を更新
        updateIndex(); 
        //インジゲーターの位置を更新      
        updateIndicators();  
    };
    
    //前へスライドする処理
    function prevClick() {
        currentSlide--;
        //最初より前に行った場合最後に戻る
        if(currentSlide < 0) {
            currentSlide = slides.length - 1;
        };
        updateIndex(); //表示位置を更新
        updateIndicators(); //インジゲーターが動く
    };


    //スライドを動かす処理
    function updateIndex() {
        //左へ1枚分スライド（1枚左に見せる）
        slideTrack.style.transition = 'transform 0.3s ease';
        slideTrack.style.transform = `translateX(-${slideWidth}px)`;
        //最後のスライドを先頭に移動
        const lastSlide = slideTrack.lastElementChild;
        const firstSlide = slideTrack.firstElementChild;
        slideTrack.insertBefore(lastSlide, firstSlide);


        //スライド位置即座に戻して滑らかに見せる
        requestAnimationFrame(() => {
            slideTrack.style.transition ='transform 0.5s ease';
            slideTrack.style.transform ='translateX(0)';
        });
    };

    
    //インジゲーターの状態を更新
    function updateIndicators() {
        indicators.forEach((indicator, index) =>{
            indicator.classList.remove('active');
            if(index === currentSlide) {
                indicator.classList.toggle('active');
            };
        });
    }

    //スライダー全体を示す要素を取得(ホバー検知用)
    const slider = document.querySelector('#slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    
    //マウスが移動したら再度自動スライドを開始する
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextClick();
        }, slideInterval);
    });
})();