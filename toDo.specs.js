let ajaxSpy;
beforeEach(function(){ 
    ajaxSpy = spyOn($, 'ajax').and.callFake(function (req) {
        var d = $.Deferred();
        d.resolve();
        return d.promise();
    })
})

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

    it('should add an item if ajax request succeeds', ()=>{
        todo.addTodo(item)
        expect(todo.getItems().length).toBe(1);
    })

    it('should not add an item if ajax request fails', ()=>{
        ajaxSpy.and.callFake(function (req) {
            var d = $.Deferred();
            d.reject();
            return d.promise();
        })
        todo.addTodo(item)
        expect(todo.getItems().length).toBe(0);     
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


describe('Testing the DOM', ()=>{

    let button;
    beforeEach(function(){
        todo = new ToDo();
        dom = new Dom();
        button = document.getElementsByTagName('button')[0];
    })

    afterEach(() => {
        setTimeout( () => {
            let form = document.getElementsByTagName('form')[0];
            if(form){ document.body.removeChild(form); }
        }, 100)
    })    

    it('should call createItem with text input value when the add button clicked', ()=> {
        spyOn(dom, 'createItem');
        document.getElementById('ItemName').value='new item';
        button.click();
        expect(dom.createItem).toHaveBeenCalled();
    })

    it('createItem should call addTodo', ()=> {
        spyOn(todo, 'addTodo').and.callThrough()
        dom.createItem('new item');
        expect(todo.addTodo).toHaveBeenCalled();
    });

    it('if item added showItems should be called', (done)=> {
        spyOn(todo, 'addTodo').and.callFake(function (req) {
            var d = $.Deferred();
            d.resolve();
            return d.promise();
        })
        spyOn(dom, 'showItems');
        dom.createItem('new item');
        expect(todo.addTodo).toHaveBeenCalled();

        setTimeout(function() {
            expect(dom.showItems).toHaveBeenCalled();
            done();
        }, 0);
    });

    it('should add todo elements to the page', (done)=> {
        document.getElementById('ItemName').value='new item';
        let list = document.getElementById('todoList');
        button.click();
        //setTimeout(function() {
            let todoElements = list.getElementsByTagName('li');
            expect(todoElements.length).toBe(1);
        //     done();
        // }, 0);
    });

})
