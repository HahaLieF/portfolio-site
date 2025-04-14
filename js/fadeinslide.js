(function fadeInSlideInit(){
    //現在のスライドインデックスを管理する変数
    let slideIndex = 0;
    //フェードイン対象のスライド画像をすべて取得
    const slideImages = document.querySelectorAll('.fade_slide img');

    //フェードインスライダーの処理
    function fadeSlideShow() {
         //すべてのスライド画像を順にチェック
        for(let i =0; i < slideImages.length; i++) {
            //表示対象のスライド画像に`'active'クラスを付与
            if(i === slideIndex) {
                slideImages[i].classList.add('active');
            //表示対象以外のスライドからは 'active' クラスを削除
            }else{
                slideImages[i].classList.remove('active');
            }
        }
             //次に表示するスライドのインデックスを設定
            slideIndex++;
            //最後のスライドまで表示したら最初に戻る
        if (slideIndex >= slideImages.length) {
            //最初のスライド画像に戻る
            slideIndex = 0;
        }
    }
    //初回実行
    fadeSlideShow();
    //3秒毎にスライドを切り替えてフェードインする
    setInterval(fadeSlideShow, 3000);
})();