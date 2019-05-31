function ToDo(){

    let todo = [];
    
    this.addTodo = (item) => {
        todo.push( item)
    }
    
    this.getItems = () => {
        return todo
    }

    this.delete = (id) => {
        todo =  todo.filter(item => item.id !== id)
    }

    this.complete = (id) => {
        todo.find(item => item.id == id).complete = true;
    }

}

todo = new ToDo();


function Dom() {

    this.createForm = () => {
        let form = document.createElement('form');
        form.name = 'todoForm';
        form.innerHTML = `
            <input id="ItemName" />
            <button
                type="button" 
                id="addButton"
                onclick="todo.addTodo(todoForm.ItemName.value); console.log(todo.getItems());">
                Add item
            </button>
        `;
        document.body.appendChild(form);
    }

}

dom = new Dom();
dom.createForm();
