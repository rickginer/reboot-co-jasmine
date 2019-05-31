describe('Testing the functionality', ()=>{

    it('should add an item', ()=>{
        let todo = new ToDo();
        let item = {
            title: "get milk",
            complete: false
        }
        const done = todo.addTodo(item)
        expect(todo.getItems().length).toBe(1);
    })

    it('should delete an item', ()=>{
        let todo = new ToDo();
        let item = {
            id: 1,
            title: "get milk",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "get beer",
            complete: false
        }
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.delete(2)
        expect(todo.getItems()[0].id).toBe(1);
    })

    it('should mark item as complete', function(){
        let todo = new ToDo();
        let item = {
            id: 1,
            title: "get milk",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "get beer",
            complete: false
        }
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.complete(2)
        expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
    })
})
