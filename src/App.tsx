import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import { TodoList } from './components/TodoList';
import { TodoModel } from './data/ItemModule';

const App = () => {
  const [todoArray, setTodoArray] = useState<TodoModel[]>([]);
  
  useEffect(() => {
    console.log(...todoArray);
  }, [todoArray])

  const handleOnCreate = (todo: TodoModel) => {
    setTodoArray(todoArray => [...todoArray, todo]);
  }

  const handleOnUpdate = (updateTodo: TodoModel) => {
    setTodoArray(todoArray => todoArray.map(todo => 
      todo.id === updateTodo.id ? {...todo, item:  updateTodo.item} : todo
    ));
  }

  const handleOnDelete = (todoIndex: number) => {
    setTodoArray(todoArray.filter(todo => todo.id !== todoIndex));
  }

  return (
    <div>
      <AddItem onCreate={handleOnCreate}/>
      <TodoList 
        todoArray={todoArray}
        onUpdate={handleOnUpdate} 
        onDelete={handleOnDelete}/>
    </div>
  );
}

export default App;