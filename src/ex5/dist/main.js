class Main {

    constructor() {
        this.ItemClient = new itemClient();
        this.todoList= [];
    }

    init () {
        this.listToDo = document.querySelector("#listToDo");
        this.buttonClearAll = document.querySelector("#buttonClearAll");
        this.buttonAdd = document.querySelector("#buttonAdd");
        ///this.textChange = document.querySelector("#textChange");
        this.buttonChange = document.querySelector("#buttonChange");
        this.removeSVG = '<i class="fa fa-trash"></i>';
        this.lengthTodoList = document.querySelector(".lengthTodoList");
        this.modal = document.querySelector("#myModal");
        this.closeModal=document.querySelector(".close");
        this.lengthTodoList.textContent =0 ;
        this.buttonAdd.addEventListener('click', ()=>{this.addTodo()});
        this.buttonClearAll.addEventListener('click',()=>{this.deleteListToDo()});
        this.buttonChange.addEventListener('click', ()=>{this.changeTodo()});
        this.closeModal.addEventListener('click', ()=>{this.onCloseClick()});
        document.addEventListener('keydown',(event)=>{this.addEnter(event)});  
    }
 
    async renderTodoList () {
        this.todoList= await this.ItemClient.getTodo();
        this.listToDo.innerHTML="";
        this.todoList.forEach(async (todo) => {
            const todoItem = await this.createListTodoDiv(todo);
            this.listToDo.appendChild(todoItem);
        });
        this.lengthTodoList.textContent = this.todoList.length;
        this.setIsActiveClearButton();
    };

    async deleteListToDo(){
        if (confirm("Are you sure??")){
            await this.ItemClient.deleteAllTodo();
            await this.renderTodoList();
        }
    }

    async changeTodo(){
        const todoChange=document.querySelector('#textChange').value;
        await this.ItemClient.changeTodo(this.modal.id,todoChange);
        document.getElementById('textChange').value = "";
        this.onCloseClick()
    }

    setIsActiveClearButton(){
        this.buttonClearAll.classList.toggle('active', this.todoList.length > 0);
    }

    onItemClick(id,todo){
        this.modal.id=id;
        document.getElementById('textChange').value = todo;
        this.modal.style.display = "block";
    }

    async onCloseClick(){
        this.modal.style.display = "none";
        await this.renderTodoList();
    }

    async onDoneClick(id,status){
        await this.ItemClient.changeDoneTodo(id,status);
        await this.renderTodoList();
    }

    async createListTodoDiv(todo){
        let div = document.createElement('div');
        div.classList.add('todo');
        let item = document.createElement('span');
        item.innerText=todo.itemName;
        item.addEventListener('click', () => this.onItemClick(todo.item_id,todo.itemName));
        let remove = document.createElement('button');
        remove.classList.add('delete');
        remove.innerHTML = this.removeSVG
        remove.id=todo.item_id;
        remove.addEventListener('click', async () => {
            await this.ItemClient.deleteTodo(remove.id);
            await this.renderTodoList();
        });
        let done = document.createElement('input');
        done.classList.add('listToDo');
        done.type='checkbox';
        done.checked=todo.status;
        done.addEventListener('click', () => this.onDoneClick(todo.item_id,!todo.status));
        div.appendChild(done);
        div.appendChild(remove);
        div.appendChild(item);
        return div;
    } 

    async addTodo(){
        const todoInput=document.querySelector('#newToDo input').value;
        if(todoInput.length == 0) {
            alert("Please Enter new todo");
        }else {
            await this.ItemClient.addTodo(todoInput);
            await this.renderTodoList();
            document.getElementById('newToInput').value = "";
        }
    }

    async addEnter(event){
        if (event.code === 'Enter') await this.addTodo();
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    main.init(); 
    await main.renderTodoList();
});

const main = new Main();
