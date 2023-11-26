import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef } from 'react';

export default function SearchField() {

  return (
    <Paper
      component="form"
      sx={{ marginRight: '20px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, borderRadius: "100px"  }}
    >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        id="textInput"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e)=> console.log(e.target.value)}
      />
    </Paper>
  );
}