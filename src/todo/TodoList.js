import React from 'react';
import {GroupList, ListItem} from 'pui-react-lists';

const Todo = ({todo, remove}) => {
    return (<ListItem onClick={()=> remove(todo.id)}>{todo.text}</ListItem>);
};

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>);
    });
    return (<GroupList>{todoNode}</GroupList>);
};

export default TodoList;