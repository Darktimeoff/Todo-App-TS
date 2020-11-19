import React from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoListProps } from './TypeTodoList';

export const TodoList: React.FC<TodoListProps> = ({todos, toggleHandler, removeHandler}) =>  (
    <ul>
        {
            todos.length ? todos.map(todo => {
                return (
                    <TodoItem todo={todo} toggleHandler={toggleHandler} removeHandler={removeHandler} key={todo.id}/>
                )
            }) : <p className="center">Пока дел нету!</p>
        }
    </ul>
)