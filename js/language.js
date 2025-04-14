(function languageInit () {
    //複数言語の切り替えのテキストデータ(日本語・英語)
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
    //切り替え対象のテキスト要素を全て取得
    const textKeys = document.querySelectorAll('[data-key]');
    //言語選択(日本語)
    const langJa = document.getElementById('lang-ja');
    //言語選択(英語)
    const langEn = document.getElementById('lang-en');

    //日本語対象のaタグにクリックイベントを指定
    langJa.addEventListener('click',() =>{
        switchLanguage('ja');
    });

    //英語対象のaタグにクリックイベントを指定
    langEn.addEventListener('click',()=>{
        switchLanguage('en');
    });

    //日本語と英語の切り替え
    function switchLanguage (lang) {
        textKeys.forEach(el => {
            const key = el.getAttribute("data-key");
            //対応する翻訳テキストを取得
            const textJa = Object.keys(translationLanguage.textArea_ja);
            const textEn = Object.keys(translationLanguage.textArea_en);
            //m該当キーが存在し、選択された言語に応じてテキストを設定
            if(textJa.includes(key) && lang ==='ja') { 
                el.textContent = translationLanguage.textArea_ja[key];
            }else if(textEn.includes(key) && lang === 'en') {
                el.textContent = translationLanguage.textArea_en[key];
            }
        });
    };
})();