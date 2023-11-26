import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useMyContext } from '@/context/my-context';
import { searchBooks } from '../../actions/get-new-books'

export default function SearchField() {
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const { newBooks, setNewBooks } = useMyContext();

  const handleSearch = () => {
    // calling search API if only searchFieldValue is not empty
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
      className='search-field-container'
      sx={{ p: '2px 4px' }}
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