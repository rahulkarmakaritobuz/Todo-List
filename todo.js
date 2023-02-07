let allTodo=new Array();
let completeTodo=new Array();

// document.getElementById('area').addEventListener("onC\hange", function (event) {
//     if (event.keyCode === 13) {
//         add();
//     }
// });



function add() {
    let task = document.getElementById("area");
    let taskList = document.getElementById("items");
    
    if (task.value.trim() != '') {
        let para = document.createElement('p');
        
        para.style.margin = '7px 0px 5px 0px'
        para.style.padding = '5px';
        para.innerText = task.value;
        allTodo.push(task.value);
        console.log(allTodo);
        taskList.appendChild(para);

        let resetList=document.getElementById("resetTodo");
        resetList.addEventListener('click',function (){
            taskList.replaceChildren('');
            allTodo.length=0;
            completeTodo.length=0;
        })

        let todos=document.getElementById("viewTodo");
        todos.addEventListener('click',function (){
            taskList.replaceChildren('');
            para.innerText=""
            for(i=0;i<allTodo.length;i++){
                // console.log(allTodo[i]);
                // para.innerHTML+=`
                // <div>
                // ${allTodo[i]}
                // </div>
                // `;
                // console.log(para);
                taskList.innerHTML+=`
                <p style="margin: 7px 0px 5px; padding: 5px;">
                ${allTodo[i]}
                </p>
                `;
                // console.log(taskList);
            }
        })

        let complete=document.getElementById("completed");
        complete.addEventListener('click',function (){
            taskList.replaceChildren('');
            para.innerText=""
            for(i=0;i<completeTodo.length;i++){
                console.log(completeTodo[i]);
                
                taskList.innerHTML+=`
                <p style="margin: 7px 0px 5px; padding: 5px;">
                ${completeTodo[i]}
                </p>`;
                console.log(taskList);
            }
        })
   

        task.value = '';

        para.addEventListener('click', function () {
            if (para.style.color == 'red') {
                para.style.color = 'rgb(113, 194, 8)';
                para.style.textDecoration = 'none';
            }
            else {
                para.style.color = 'red';
                para.style.textDecoration = 'line-through';
            }
        })

        para.addEventListener('dblclick', function () {
            completeTodo.push(para.innerText);
            taskList.removeChild(para);
            console.log(completeTodo);
        })
    }

}

document.querySelector("#area").addEventListener("keyup", function(e){
 if(e.key === "Enter"){
    add();
 }
});



// toButton.addEventListener('click',function(){
//     let para=document.createElement('p');
//     para.innerHTML=task.value;
//     taskList.appendChild(para);
//     task.value='';
//     para.addEventListener('click',function(){
//         para.style.textDecoration='link-through';
//     })
//     para.addEventListener('dblclick',function(){
//         taskList.removeChild(para);
//     })
// })



