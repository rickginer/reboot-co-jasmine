function ToDo(){

    let todo = [];
    
    this.addTodo = (item) => {
        const promise = $.ajax({
            url: 'https://httpstat.us/200',
            type: 'POST'            
        }).done(function () {
            todo.push( item)
        }).fail(function() {
            console.log('failed async call');
        });
        return promise;
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
                onclick="dom.createItem(todoForm.ItemName.value); ">
                Add item
            </button>
            <ul id="todoList"></ul>
        `;
        document.body.appendChild(form);
    }

    this.createItem = (val) => {
        let item = {
            'id' : Date.now(),
            'complete': false,
            'title': val
        }
        todo.addTodo(item).then(() => {
            this.showItems()
        }).catch((response) => {
            console.log('Error', response);
        });
    }

    this.showItems = () => {
        let todoList = document.getElementById('todoList');
        let items = todo.getItems()
        todoList.innerHTML = '';
        items.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = item.title;
            todoList.appendChild(li);
        })
    }

}

dom = new Dom();
dom.createForm();
