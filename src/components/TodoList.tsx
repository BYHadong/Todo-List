import { TodoModel } from '../data/ItemModule';
import { TodoItem } from './TodoItem';

type TodoListProps = {
    todoArray: TodoModel[];
    onUpdate: (todo: TodoModel) => void;
    onDelete: (todoIndex: number) => void;
}

export const TodoList = ({todoArray, onUpdate, onDelete}: TodoListProps) => {
    return(
        <div style={{width: "100%"}}>
            {todoArray.map(todoItem => {
                return (
                    <TodoItem 
                        todoItem={todoItem}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    )
}