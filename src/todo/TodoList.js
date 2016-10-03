import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const Todo = ({todo, remove}) => {
    return (<ListGroupItem onClick={()=> remove(todo.id)}>{todo.text}</ListGroupItem>);
};

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>);
    });
    return (<ListGroup>{todoNode}</ListGroup>);
};

export default TodoList;