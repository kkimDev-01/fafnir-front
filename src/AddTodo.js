import React, { useState } from 'react';

import { Button, Grid, TextField } from '@mui/material';

const AddTodo = (props) => {
  // 사용자의 입력을 저정할 오브젝트
  const [item, setItem] = useState({ title: '' });
  const addItem = props.addItem;

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  const onButtonClick = () => {
    addItem(item);
    console.log(item);
  };

  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };

  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          onKeyPress={enterKeyEventHandler}
          value={item.title}
        />
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: '100%' }}
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;