describe('Testing the functionality', ()=>{

    let todo, item, item2;
    beforeEach(function(){
        todo = new ToDo();
        item = {
            id: 1,
            title: "get milk",
            complete: false
        }
        item2 = {
            id: 2,
            title: "get beer",
            complete: false
        }   
    })

    it('should add an item', ()=>{
        todo.addTodo(item)
        expect(todo.getItems().length).toBe(1);
    })

    it('should delete an item', ()=>{
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.delete(2)
        expect(todo.getItems()[0].id).toBe(1);
    })

    it('should mark item as complete', function(){
        todo.addTodo(item)
        todo.addTodo(item2)
        todo.complete(2)
        expect(todo.getItems().find(item => item.id == 2).complete).toBe(true);
    })
})
