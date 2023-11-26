import { useEffect, useState } from 'react';
import SearchField from '@/components/search-field/search-field';
import { Box, Grid, Typography } from '@mui/material';
import BookStoreCard from '@/components/cards/book-store-card';
import { useMyContext } from '../context/my-context';
import { useRouter } from 'next/router';
import { getNewBooks } from '../actions/get-new-books'

export default function Home() {
  const { newBooks, setNewBooks } = useMyContext();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const { cart, setCart } = useMyContext();

  const router = useRouter();

  // Navigate to the desired page on button click
  const handleClick = () => {
    router.push('/cart');
  };

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp += (+cart[i].price.substring(1) * +cart[i].quantity);
    }
    setCartTotalPrice(+temp.toFixed(2));
  }, [cart]);

  useEffect(() => {
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

      <div className="searchbar-container">
        <SearchField />
        <div className='cart-card' onClick={handleClick}>
          <div style={{ fontWeight: 'bold' }}>Cart</div>
          <div>{cart.length} items</div>
          <div>$ {cartTotalPrice}</div>
        </div>
      </div>

      <div style={{ margin: '40px' }}>
        <div>
          <Typography variant="h6">New Books</Typography><br/>
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
