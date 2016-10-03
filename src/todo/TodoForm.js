import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Col, FormControl, Button, Glyphicon} from 'react-bootstrap';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.input = null;
        this.addTodo = props.addTodo;
    }

    render() {
        return (
            <div>
                <Col xs={3}>
                    <FormControl ref={node => {
                        this.input = node;
                    }}/>
                </Col>
                <Col xs={1}>
                    <Button bsStyle="primary"
                            disabled={this.state.isLoading}
                            onClick={() => {
                                let dom = ReactDOM.findDOMNode(this.input);
                                this.setState({isLoading: true});
                                this.addTodo(dom.value)
                                    .then((res) => {
                                        this.setState({isLoading: false});
                                        dom.value = '';
                                    });
                            }}>
                        <Glyphicon glyph="plus"/>
                    </Button>
                </Col>
            </div>
        );
    }
}
;

export default TodoForm;