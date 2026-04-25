let ptr =1;
const inputEle = document.getElementById("inp1");

function addTodo(){
    const value = inputEle.value;
    if (!value) return;

    const newDiv = document.createElement("div");
    const index = ptr;
    newDiv.setAttribute('id',index);
    ptr+=1;

    newDiv.innerHTML = `
        <div>
            <span id="text-${index}">${value}</span>
            <div class="btn-group">
                <button onclick="strikeTodo(${index})">Done</button>
                <button onclick="deleteTodo(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `;

    document.getElementById("todo-list").appendChild(newDiv);
    newDiv.classList.add("todo");
    inputEle.value= ``;
}

inputEle.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

function deleteTodo(index){
    const ele = document.getElementById(index);
    ele.parentElement.removeChild(ele);
}

function strikeTodo(index){
    const ele = document.getElementById(`text-${index}`);
    ele.classList.toggle("completed");
}