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
    //...
    })

    it('should mark item as complete', ()=>{
    //...
    })
})
