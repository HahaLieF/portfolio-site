//入力欄の取得
const taskInput = document.getElementById('taskInput');
//追加ボタンの取得
const addTask = document.getElementById('addTask');
//リストの取得
const taskList = document.getElementById('taskList');
console.log(taskList);
//追加ボタンをクリックしたらリストを作成する
addTask.addEventListener('click' , function(){
    const taskText = taskInput.value.trim();
    const list = document.createElement('li');
    list.textContent = taskText;
    taskList.appendChild(list);
    saveTask(taskText);
        if(taskText) {
            taskInput.value = "";
        };
});
//追加したリストをローカルストレージに保存する。
const saveTask = (taskText) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//ページを開いた時にメモを表示
const loadTask = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((taskText) => {
        const list = document.createElement('li');
        const taskTexts = taskText;
        list.appendChild(document.createTextNode(taskTexts)); 
        taskList.appendChild(list);
    })
}
window.addEventListener('load',loadTask);

//メモを削除する
const deleteTask = () => {
    taskList.addEventListener('click',function(event) {
        list = event.target;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks =//filterの使い方を調べること
        
        if(list === document.createContextualFragment(taskText)){
            
        }

        

        
    })
}
deleteTask();

