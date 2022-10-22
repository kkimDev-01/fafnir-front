import React, { useState } from 'react';
import {
  ListItem,
  Checkbox,
  ListItemText,
  InputBase,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Todo = (props) => {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  };

  const editEventHandler = (e) => {
    setItem({ ...item, title: e.target.value });
  };

  const turnOnReadOnly = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      editItem(item);
    }
  };

  const turnOffReadOnly = () => {
    setReadOnly(false);
  };

  const deleteEventHandler = () => {
    deleteItem(item);
  };

  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ 'aria-label': 'naked', readOnly: readOnly }}
          onClick={turnOffReadOnly}
          onChange={editEventHandler}
          onKeyDown={turnOnReadOnly}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
