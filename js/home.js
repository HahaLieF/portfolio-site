// //複数言語の切り替え
// const translationLanguage = {
//     textArea_ja: {
//         text1:'学習内容',
//         text2:'現在勉強しているJavaScript内容',
//         text3:'今後学ぶ予定の内容',
//         text4:'JavaScriptの基本構文',
//         text5:'DOM操作',
//         text6:'スライダーの実装',
//         text7:'処理の流れや変数の役割を理解しながらのコーディング',
//         text8:'フェードインアニメーションの実装',
//         text9:'非同期処理（fetch / API連携)',
//         text10:'状態管理の基礎',
//         text11:'Reactなどのフレームワーク',
//         text12:'実用的なアプリケーション制作'
//     },
//     textArea_en: {
//         text1:'learning content',
//         text2:'I am studying JavaScript',
//         text3:'What you`ll learn in the future',
//         text4:'Basic syntax',
//         text5:'DOM manipulation',
//         text6:'Implementing a slider',
//         text7:'Coding while understanding the process and the role of variables',
//         text8:'Asynchronous processing (fetch / API integration',
//         text9:'Implementing a fade-in animation',
//         text10:'The foundation of state management',
//         text11:'React and other frameworks',
//         text12:'Creating practical applications'
//     }
// };
// //data-key属性を一括取得
// const textKeys = document.querySelectorAll('[data-key]');
// //日本語の取得
// const langJa = document.getElementById('lang-ja');
// //英語の取
// const langEn = document.getElementById('lang-en');
// //テキストの取得
// const textlangAll = document.querySelectorAll('[data-role]');
// //日本語にクリックイベントを指定
// langJa.addEventListener('click',() =>{
//     switchLanguage('ja');
// });

// //Englishにクリックイベントを指定(後でアロー関数に引数enを指定して挙動を確認する)
// langEn.addEventListener('click',()=>{
//     switchLanguage('en');
// });

// //日本語と英語の切り替え
// function switchLanguage (lang) {
//     textKeys.forEach(el => {
//         const key = el.getAttribute("data-key");
//         // console.log("処理対象のkey:", key);
//         const textJa = Object.keys(translationLanguage.textArea_ja);
//         const textEn = Object.keys(translationLanguage.textArea_en);
//         // console.log("日本語配列に含まれてる？", textJa.includes(key));
//         if(textJa.includes(key) && lang ==='ja') { //ここは後に修正する
//             el.textContent = translationLanguage.textArea_ja[key];
//         }else if(textEn.includes(key) && lang === 'en') {
//             el.textContent = translationLanguage.textArea_en[key];
//         }
//     });
// }


// /*ハンバーガーメニュー*/
// const hamburgerButton = document.getElementById('js-hamburger');
// const hamburgerMenu = document.querySelector('.hamburger_menu_mobile');
// hamburgerButton.addEventListener('click',function(){
//     hamburgerMenu.classList.toggle('open');
// });


// /*フェードインスライダー*/
// let slideIndex = 0;
// const slideImages = document.querySelectorAll('.fade_slide img');

// function fadeSlideShow() {
//     for(let i =0; i < slideImages.length; i++) {
//         if(i === slideIndex) {
//             slideImages[i].classList.add('active');
//         }else{
//             slideImages[i].classList.remove('active');
//         }
//     }
//         slideIndex++;
//     if (slideIndex >= slideImages.length) {
//         slideIndex = 0;
//     }
// }
// fadeSlideShow();
// setInterval(fadeSlideShow, 3000);


//デスクトップ・タブレット側スライダー
// const slides = document.querySelectorAll('.slides_image img');
// const slideTrack = document.querySelector('.slide_track');
// const indicators = document.querySelectorAll('.indicator li');
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');
// //現在のスライドの枚数を管理
// let currentSlide= 0;
// //一枚あたりのスライド画像の幅を取得
// const slideWidth = slides[0].clientWidth +10;

// nextBtn.addEventListener('click', nextClick);
// prevBtn.addEventListener('click', prevClick);


// const slideInterval = 3000;
// let autoSlide = setInterval(() => {
//     nextClick();
// }, slideInterval);


// function nextClick() {
//     currentSlide++
//     if(currentSlide > 4) {
//         currentSlide = slides.length = 0;
//     }
//     updateIndex(); // 表示位置を更新
//     updateIndicators();
// };
// function prevClick() {
//     currentSlide--;
//     if(currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     };
//     updateIndex(); //表示位置を更新
//     updateIndicators(); //インジゲーターが動く
// };


// function updateIndex() {
//     //左へ1枚分スライド（＝1枚左に見せる）
//     slideTrack.style.transition = 'transform 0.3s ease';
//     slideTrack.style.transform = `translateX(-${slideWidth}px)`;
//     //先頭の画像を最後尾に移動
//     const lastSlide = slideTrack.lastElementChild;
//     const firstSlide = slideTrack.firstElementChild;
//     slideTrack.insertBefore(lastSlide, firstSlide);
//     requestAnimationFrame(() => {
//         slideTrack.style.transition ='transform 0.5s ease';
//         slideTrack.style.transform ='translateX(0)';
//     });
// };


// function updateIndicators() {
//     indicators.forEach((indicator, index) =>{
//         indicator.classList.remove('active');
//         if(index === currentSlide) {
//             indicator.classList.toggle('active');
//         };
//     });
// };

// const slider = document.querySelector('#slider');

// slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
// slider.addEventListener('mouseleave', () => {
//     autoSlide = setInterval(() => {
//         nextClick();
//     }, slideInterval);
// });




// //スクロールイベント
// window.addEventListener('scroll', function () {
//     const scrollAmount = window.scrollY;
//     const windowHeight = window.innerHeight;

//     const elements = document.querySelectorAll('.scroll_target');
//     elements.forEach((el) => {
//         const distanceToEl = el.offsetTop;
//         if (scrollAmount + windowHeight > distanceToEl) {
//             if (el.classList.contains('text_area')) {
//                 el.classList.add('text_list_active');
//             }
//             const innerList = el.querySelector('.text_list');
//             if(innerList) {
//                 innerList.classList.add('text_list_active');
//             }
//             if (el.classList.contains('list_separator_image')) {
//                 el.classList.add('image_active');
//             }
//         }
//     });
// });








