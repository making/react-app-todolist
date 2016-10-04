import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Col} from "pui-react-grids";
import {Input} from "pui-react-inputs";
import {HighlightButton} from "pui-react-buttons";
import {Icon} from "pui-react-iconography";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            validationState: null,
            todo: ''
        };
        this.addTodo = props.addTodo;
    }

    handleTodoChange(event) {
        this.setState({
            todo: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let todo = this.state.todo;
        if (todo) {
            this.setState({
                isLoading: true
            });
            this.addTodo(todo)
                .then((res) => {
                    this.setState({
                        isLoading: false,
                        todo: ''
                    });
                    this.focus();
                });
        } else {
            this.setState({
                validationState: 'error'
            });
        }
    }

    focus() {
        // ugly
        ReactDOM.findDOMNode(this.refs.todo).querySelector("input").focus();
    }

    render() {
        return (
            <form role="form" onSubmit={this.handleSubmit.bind(this)}>
                <Col sm={10}>
                    <Input label=""
                           id="todo"
                           ref="todo"
                           displayError={this.state.validationState === 'error'}
                           errorMessage="Please enter your todo."
                           value={this.state.todo}
                           onChange={this.handleTodoChange.bind(this)}
                           disabled={this.state.isLoading}
                           autoFocus={true}/>
                </Col>
                <Col sm={2}>
                    <HighlightButton
                        disabled={this.state.isLoading}>
                        <Icon name="plus" size="lg"/>
                    </HighlightButton>
                </Col>
            </form>
        );
    }
}

export default TodoForm;