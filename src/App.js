import React, {Component} from "react";
import {Row} from "pui-react-grids";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import Title from "./todo/Title";
import TodoClient from "./todo/TodoClient";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.todoClient = new TodoClient();
    }

    addTodo(val) {
        const todo = {text: val};
        return this.todoClient.postTodos(todo)
            .then((res) => {
                this.state.data.push(res.data);
                this.setState({data: this.state.data});
            });
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            } else {
                return null;
            }
        });
        this.todoClient.deleteTodo(id)
            .then((res) => {
                this.setState({data: remainder});
            });
    }

    componentDidMount() {
        this.todoClient.getTodos()
            .then((res) => {
                this.setState({data: res.data});
            });
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Title todoCount={this.state.data.length}/>
                </Row>
                <Row>
                    <TodoForm addTodo={this.addTodo.bind(this)}/>
                </Row>
                <hr />
                <Row>
                    <TodoList todos={this.state.data} remove={this.handleRemove.bind(this)}/>
                </Row>
            </div>
        );
    }
}

export default App;
