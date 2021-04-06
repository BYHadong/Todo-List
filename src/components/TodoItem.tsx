import { TextField } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import React, { useState } from 'react';
import { TodoModel } from '../data/ItemModule';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const CreateIconStyle: CSSProperties = {
  marginRight: 10,
  marginLeft: 10,
  fontSize: 28,
  border: "1px solid black",
  padding: 5
}

const DeleteIconStyle: CSSProperties = {
  fontSize: 28,
  border: "1px solid black",
  padding: 5,
}

const TodoListItemStyle: CSSProperties = {
  width: "70%",
  border: "1px solid black",
  padding: 10,
}

const TextFieldStyle: CSSProperties = {
  marginRight: 20,
  width: "70%",
}

const ItemStyle: CSSProperties = {
  display:'flex', 
  alignItems: 'center', 
  marginTop: 10, 
  width:"100%", 
  justifyContent: "center"
}

type TodoItemProps = {
  todoItem: TodoModel;
  onUpdate: (todo: TodoModel) => void;
  onDelete: (todoIndex: number) => void;
}

export const TodoItem = ({todoItem, onDelete, onUpdate}: TodoItemProps) => {
const [changeTodoItemText, setFlag] = useState(true)
const [todoText, setTodoText] = useState(todoItem.item);

const handleUpdate = () => {
  setFlag(!changeTodoItemText);
  const todo: TodoModel = {      
    id: todoItem.id,
    item: todoText
  }
  onUpdate(todo);
}

const handleDelete = () => {
  onDelete(todoItem.id);
}

const textFieldOnChagne = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTodoText(todoText => event.target.value);
}

  return(
    <div style={ItemStyle}>
      {console.log("TodoItme"+todoItem)}
      {changeTodoItemText ? 
        (
          <div style={TodoListItemStyle}>
            {todoItem.id + ": id / "}
            {todoText + ": item"}
          </div>
        ) 
        :
        (
          <TextField 
            style={TextFieldStyle}
            label="TodoList" 
            variant="outlined" 
            value={todoText} 
            onChange={textFieldOnChagne}
          />
      )}
      <CreateIcon style={CreateIconStyle} onClick={handleUpdate}/>
      <DeleteIcon style={DeleteIconStyle} onClick={handleDelete}/>
    </div>
  )
}