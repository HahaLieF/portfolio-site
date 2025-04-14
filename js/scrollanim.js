(function(){
    //スクロールイベントを監視して要素が画面内に入ったらアニメーション開始
    window.addEventListener('scroll', function () {
        //現在のスクロール量を取得
        const scrollAmount = window.scrollY;
        //ウインドウの高さを取得
        const windowHeight = window.innerHeight;
        //アニメーション対象となる要素を取得
        const elements = document.querySelectorAll('.scroll_target');

        //取得した対象要素のノードを順に変数elに代入し処理を行う
        elements.forEach((el) => {
            //代入した対象要素の画面上からの距離を取得
            const distanceToEl = el.offsetTop;

            //スクロール量+ウインドウの高さが、対象要素の位置を超えた場合
            if (scrollAmount + windowHeight > distanceToEl) {
                //要素が.text_areaクラスを持っている場合、フェードイン用のクラスを付与
                if (el.classList.contains('text_area')) {
                    el.classList.add('text_list_active');
                }
                //要素内に.text_listが存在した場合、同様にクラスを追加
                const innerList = el.querySelector('.text_list');
                if(innerList) {
                    innerList.classList.add('text_list_active');
                }
                //要素が.list_separator_imageを持っていた場合、画像用のフェードインクラスを付与
                if (el.classList.contains('list_separator_image')) {
                    el.classList.add('image_active');
                }
            }
        });
    });
})();