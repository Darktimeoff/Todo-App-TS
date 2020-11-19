import { Todo } from "../../TypeApp";

export interface TodoListProps  {
    todos: Array<Todo>;
    toggleHandler(id: number): void;
    removeHandler(id: number): void;
}