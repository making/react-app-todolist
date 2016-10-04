import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Col, Form, FormGroup, FormControl, Button, Glyphicon} from "react-bootstrap";

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
                isLoading: true,
                validationState: null
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
        ReactDOM.findDOMNode(this.refs.todo).focus();
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
                <Col>
                    <FormGroup validationState={this.state.validationState}>
                        <FormControl ref="todo"
                                     value={this.state.todo}
                                     onChange={this.handleTodoChange.bind(this)}
                                     disabled={this.state.isLoading}
                                     autoFocus={true}/>
                        <Button bsStyle="primary"
                                disabled={this.state.isLoading}
                                onClick={this.handleSubmit.bind(this)}>
                            <Glyphicon glyph="plus"/>
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        );
    }
}
;

export default TodoForm;