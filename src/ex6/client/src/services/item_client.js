class itemClient {
    constructor() {
        this.serverURL = "http://localhost:3042/";
    }

    async getTodo() {
       const response =await fetch(`${this.serverURL}getAll` );
       return await response.json();
    }

    async addTodo(todo) {
        const response = await fetch(this.serverURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({todo})
        })
        return await response.json();
    }

    async deleteTodo(id) {
        await fetch(`${this.serverURL}id`,{
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id})
        })
    }

    async deleteAllTodo() {
        await fetch(this.serverURL,{
            method: 'DELETE'
        })
    }

    async changeItemTodo(id,status) {
        const response =  await fetch(`${this.serverURL}status`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id,status})
        })
        return await response.json();
    }
 }
 export default itemClient;