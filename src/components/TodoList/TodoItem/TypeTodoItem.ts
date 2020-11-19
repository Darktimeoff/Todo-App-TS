import { Todo } from "../../../TypeApp";

export interface TodoItemProps {
    todo: Todo;
    toggleHandler(id: number): void;
    removeHandler(id: number): void;
}