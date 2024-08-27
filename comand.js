document.getElementById("push").addEventListener("click", function() {

    if (document.getElementById('press').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        
        document.getElementById('tasks').innerHTML +=
        `<div class = "task">
        <span id = "taskname">
        ${document.getElementById('press').value}
        </span>
        <button id="delete">
        <i class="fa-solid fa-trash-can"></i>
        </button>
     </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        
    }
    
});





