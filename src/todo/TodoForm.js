import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Col, Form, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            validationState: null
        };
        this.input = null;
        this.addTodo = props.addTodo;
    }

    handleSubmit(e) {
        e.preventDefault();
        let dom = ReactDOM.findDOMNode(this.input);
        if (dom.value) {
            this.setState({
                isLoading: true,
                validationState: null
            });
            this.addTodo(dom.value)
                .then((res) => {
                    this.setState({
                        isLoading: false,
                        validationState: null
                    });
                    dom.value = '';
                });
        } else {
            this.setState({
                isLoading: false,
                validationState: 'error'
            });
        }
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
                <Col>
                    <FormGroup validationState={this.state.validationState}>
                        <FormControl ref={node => {
                            this.input = node;
                        }}/>
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