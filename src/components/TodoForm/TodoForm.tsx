import React, {useRef} from 'react';
import { TodoFormProps } from './typeTodoForm';

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const inputKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                type="text" 
                id="title" 
                placeholder="Введите название дел" 
                ref={ref}
                onKeyPress={inputKeyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите название дел
            </label>
        </div>
    )
}