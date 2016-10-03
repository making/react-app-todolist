import axios from 'axios';

class TodoClient {
    constructor() {
        this.apiUrl = 'http://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
    }

    getTodos() {
        return axios.get(this.apiUrl);
    }

    postTodos(todo) {
        return axios.post(this.apiUrl, todo);
    }

    deleteTodo(id) {
        return axios.delete(this.apiUrl + '/' + id);
    }
}

export default TodoClient;