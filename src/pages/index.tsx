import { useEffect, useState } from 'react';
import SearchField from '@/components/search-field/search-field';
import { Box, Grid, Typography } from '@mui/material';
import BookStoreCard from '@/components/cards/book-store-card';
import { useMyContext } from '../context/my-context';
import { useRouter } from 'next/router';
import { getNewBooks } from '../actions/get-new-books'
import CartWidget from '@/components/cart-widget/cart-widget';

export default function Home() {
  const { newBooks, setNewBooks } = useMyContext();

  useEffect(() => {
    // calling API for get new books details
    getNewBooks()
      .then(data => {
        setNewBooks(data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (
    <div>
      <div>
        <Typography className="page-heading" variant="h3">Book Store</Typography>
      </div>

      <CartWidget showSearchField={true} />

      <div className='new-books-container'>
        <div>
          <Typography variant="h6">New Books</Typography><br />
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
              newBooks.books?.map((e) =>
                <Grid item xs={12} md={6} key={e.isbn13}>
                  <BookStoreCard image={e.image} title={e.title} subtitle={e.subtitle} isbn13={e.isbn13} price={e.price} url={e.url} />
                </Grid>
              )
            }
          </Grid>
        </Box>

      </div>
    </div>
  )
}
