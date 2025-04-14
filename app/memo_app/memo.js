//メモを保存する処理
function saveMemo() {
    const titleInput = document.getElementById('memoTitle');
    const contentInput = document.getElementById('memoContent');
    //入力されたタイトルと内容の取得
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    //どちらかが空の場合は保存しない
    if (title === "" || content === "") return; 

    //空のオブジェクトを作成
    const emptyMemo = {};  
    // 既存のメモを取得（存在しない場合は空のオブジェクト）
    const memos = JSON.parse(localStorage.getItem('memo')) || emptyMemo;
    // タイトルをキーに、内容を値として追加
    memos[title] = content;
    console.log(memos);
    // localStorageにオブジェクトを文字列にして保存
    localStorage.setItem('memo',JSON.stringify(memos));
    
    
    // 入力欄をクリア
    titleInput.value = "";
    contentInput.value = "";
}  
//保存したメモをリストに表示
function displayMemoPrint() {
    const memoList = document.getElementById('memoList');
    //表示前に2重表示を防止
    memoList.textContent = "";
    //ローカルストレージに保存されているメモを取得し、定数memosに入れる
    const memos = JSON.parse(localStorage.getItem('memo')) || {};
    //各メモを<li>タグとして表示
    for(let title in memos) {
        const listTag = document.createElement('li');
        listTag.innerHTML = `${title}: ${memos[title]}`;
        //削除ボタンの作成
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        //削除ボタンをクリックしたらメモを削除
        deleteBtn.onclick = function() {
            deleteMemo(title);  
        };
        //画面にボタンを表示する
        memoList.appendChild(listTag);
        listTag.appendChild(deleteBtn);
    }

}
//ページ読み込み時にメモを表示する
window.onload = displayMemoPrint;

//メモの削除する処理
function deleteMemo(title) {
    //空のオブジェクトを作成
    const emptyMemo = {};
    
    //メモのタイトルと内容をセットにする
    const memos = JSON.parse(localStorage.getItem('memo')) || emptyMemo;

    console.log('削除前のメモ', memos);
    
    //指定されたタイトルのメモが存在する場合のみ削除
    if(memos[title]) {
        delete memos[title];
        localStorage.setItem('memo',JSON.stringify(memos));
        displayMemoPrint();
        alert('メモを削除しました。');
        console.log('削除用のメモ', memos);
    }else{
        alert('指定されたメモが存在しません');
        console.log('削除h失敗：メモが見つかりません');
    }
}  



