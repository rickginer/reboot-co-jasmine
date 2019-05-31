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
}
