(function hamburgerInit(){
    //対象のハンバーガメニューを取得
    const hamburgerButton = document.getElementById('js-hamburger');

    const hamburgerMenu = document.querySelector('.hamburger_menu_mobile');

    hamburgerButton.addEventListener('click', function() {
        // メニューがすでに開いている状態かどうかを確認
        const isOpen = hamburgerMenu.classList.contains('open');

        if (isOpen) {
            // 開いている場合：openを外してcloseを追加（閉じるアニメーション）
            hamburgerMenu.classList.remove('open');
            hamburgerMenu.classList.add('close');
        } else {
            // 閉じている場合：closeを外してopenを追加（開くアニメーション）
            hamburgerMenu.classList.remove('close');
            hamburgerMenu.classList.add('open');
        }
    });
})();