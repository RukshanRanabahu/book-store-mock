import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useMyContext } from '@/context/my-context';
import { getNewBooks, searchBooks } from '../../actions/get-new-books'

export default function SearchField() {
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const { newBooks, setNewBooks } = useMyContext();

  const handleSearch = () => {
    if (searchFieldValue.toString() != '')
      searchBooks(searchFieldValue.toString())
        .then(data => {
          setNewBooks(data);
        })
        .catch(error => {
          console.error(error);
        });
  };

  return (
    <Paper
      component="form"
      sx={{ marginRight: '20px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, borderRadius: "100px" }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>

      <InputBase
        id="textInput"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchFieldValue(e.target.value)}
      />
    </Paper>
  );
}