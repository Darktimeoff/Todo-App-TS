import React from 'react';
import { TodoItemProps } from './TypeTodoItem';

export const TodoItem: React.FC<TodoItemProps> = ({todo, removeHandler, toggleHandler}) => (
    <li className={todo.completed ? 'todo completed' : 'todo'}>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={ _ => toggleHandler(todo.id)}/>
            <span>{todo.title}</span>
            <i className="material-icons red-text" onClick={ (event: React.MouseEvent) => { 
                event.preventDefault();
                removeHandler(todo.id)
            }}>delete</i>
        </label>
    </li>
)