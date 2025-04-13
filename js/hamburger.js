(function hamburgerInit(){
    /*ハンバーガーメニュー*/
    const hamburgerButton = document.getElementById('js-hamburger');
    const hamburgerMenu = document.querySelector('.hamburger_menu_mobile');
    hamburgerButton.addEventListener('click',function(){
    hamburgerMenu.classList.toggle('open');
    });
})();