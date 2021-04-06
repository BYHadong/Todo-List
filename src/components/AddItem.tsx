import { TodoModel } from '../data/ItemModule';
import React, { useRef, useState } from 'react'
import { CSSProperties } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

const TextFieldStyle: CSSProperties = {
  marginRight: 20,
  width: "70%",
}
  
const InputBoxStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginTop: 20,
}

type AddItmeProps = {
  onCreate: (todo: TodoModel) => void;
}
  
const AddItem = ({onCreate} : AddItmeProps) => {
  const [todoText, setTodoText] = useState("");
  const todoId = useRef<number>(0);

  const increaseId = () => {
    todoId.current += 1;
  }

  const handleAddItem = (item: string, id: number) => {
    const todo: TodoModel = {
      id: id,
      item: item
    };
    onCreate(todo);
    setTodoText("");
    increaseId();
  };

  const textFieldTextOnChagne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <div 
      style={InputBoxStyle} 
      className="inputTodoList">

      <TextField 
        style={TextFieldStyle}
        label="TodoList" 
        variant="outlined" 
        value={todoText} 
        onChange={textFieldTextOnChagne}/>

      <Button 
        id="todoListInputBtn" 
        variant='contained'
        color='primary' 
        onClick={() => handleAddItem(todoText, todoId.current)}> 
          Add
      </Button>
    </div>
  );
}

export default AddItem;