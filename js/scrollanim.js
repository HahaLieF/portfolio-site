(function(){
    //スクロールイベント
    window.addEventListener('scroll', function () {
        const scrollAmount = window.scrollY;
        const windowHeight = window.innerHeight;

        const elements = document.querySelectorAll('.scroll_target');
        elements.forEach((el) => {
            const distanceToEl = el.offsetTop;
            if (scrollAmount + windowHeight > distanceToEl) {
                if (el.classList.contains('text_area')) {
                    el.classList.add('text_list_active');
                }
                const innerList = el.querySelector('.text_list');
                if(innerList) {
                    innerList.classList.add('text_list_active');
                }
                if (el.classList.contains('list_separator_image')) {
                    el.classList.add('image_active');
                }
            }
        });
    });
})();