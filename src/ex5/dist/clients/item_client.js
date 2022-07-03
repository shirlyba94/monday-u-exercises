class itemClient {
    
    async getTodo() {
       const response =await fetch("/getAll");
       return await response.json();
    }

    async addTodo(todo) {
        await fetch("/",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({todo})
        })
    }

    async deleteTodo(id) {
        await fetch("/id",{
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id})
        })
    }

    async deleteAllTodo() {
        await fetch("/",{
            method: 'DELETE'
        })
    }

    async changeDoneTodo(id,status) {
        await fetch("/status",{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id,status})
        })
    }

    async changeTodo(id,todo) {
        await fetch("/item",{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id,todo})
        })
    }
 }
