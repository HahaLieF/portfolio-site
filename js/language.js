(function languageInit () {
    //複数言語の切り替え
    const translationLanguage = {
        textArea_ja: {
            text1:'学習内容',
            text2:'現在勉強しているJavaScript内容',
            text3:'今後学ぶ予定の内容',
            text4:'JavaScriptの基本構文',
            text5:'DOM操作',
            text6:'スライダーの実装',
            text7:'処理の流れや変数の役割を理解しながらのコーディング',
            text8:'フェードインアニメーションの実装',
            text9:'非同期処理（fetch / API連携)',
            text10:'状態管理の基礎',
            text11:'Reactなどのフレームワーク',
            text12:'実用的なアプリケーション制作'
        },
        textArea_en: {
            text1:'learning content',
            text2:'I am studying JavaScript',
            text3:'What you`ll learn in the future',
            text4:'Basic syntax',
            text5:'DOM manipulation',
            text6:'Implementing a slider',
            text7:'Coding while understanding the process and the role of variables',
            text8:'Asynchronous processing (fetch / API integration',
            text9:'Implementing a fade-in animation',
            text10:'The foundation of state management',
            text11:'React and other frameworks',
            text12:'Creating practical applications'
        }
    };
    //data-key属性を一括取得
    const textKeys = document.querySelectorAll('[data-key]');
    //日本語の取得
    const langJa = document.getElementById('lang-ja');
    //英語の取
    const langEn = document.getElementById('lang-en');
    //テキストの取得
    const textlangAll = document.querySelectorAll('[data-role]');
    //日本語にクリックイベントを指定
    langJa.addEventListener('click',() =>{
        switchLanguage('ja');
    });

    //Englishにクリックイベントを指定(後でアロー関数に引数enを指定して挙動を確認する)
    langEn.addEventListener('click',()=>{
        switchLanguage('en');
    });

    //日本語と英語の切り替え
    function switchLanguage (lang) {
        textKeys.forEach(el => {
            const key = el.getAttribute("data-key");
            // console.log("処理対象のkey:", key);
            const textJa = Object.keys(translationLanguage.textArea_ja);
            const textEn = Object.keys(translationLanguage.textArea_en);
            // console.log("日本語配列に含まれてる？", textJa.includes(key));
            if(textJa.includes(key) && lang ==='ja') { //ここは後に修正する
                el.textContent = translationLanguage.textArea_ja[key];
            }else if(textEn.includes(key) && lang === 'en') {
                el.textContent = translationLanguage.textArea_en[key];
            }
        });
    };
})();