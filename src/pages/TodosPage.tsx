import React, {useState, useEffect} from 'react';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoList } from '../components/TodoList/TodoList';
import { Todo } from '../TypeApp';

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
		setTodos(saved);
	}, []);

	useEffect(() => {
		if(!todos.length) return;
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])

	const addHandler = (title: string) => {
		const newTodo: Todo = {
			title,
			id: Date.now(),
			completed: false
		}
		setTodos(prevState => [newTodo, ...prevState]);
	}

	const toggleHandler = (id: number) => {
		setTodos(prevState => prevState.map(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		)
	}

	const removeHandler = (id: number) => {
		const shouldRemove: boolean = window.confirm("Вы уверены что хотите удалить элемент?");
		if(shouldRemove) {
			setTodos(prevState => prevState.filter(todo => todo.id !== id))
		}
    }
    
    return (
        <>
            <TodoForm onAdd={addHandler}/>
			<TodoList toggleHandler={toggleHandler} removeHandler={removeHandler} todos={todos}/>
        </>
    )
}