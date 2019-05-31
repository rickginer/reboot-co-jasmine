function ToDo(){
    let todo = [];
    this.addTodo = (item) => {
        todo.push( item)
    }
    this.getItems = () => {
        return todo
    }
}
