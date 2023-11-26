import BookStoreCard from '@/components/cards/book-store-card';
import { Box, Grid, Typography } from '@mui/material';
import { useMyContext } from '../context/my-context';
import CartCard from '@/components/cards/cart_card';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import router from 'next/router';

export default function Cart() {
  const { cart, setCart } = useMyContext();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp += (+cart[i].price.substring(1) * +cart[i].quantity);
    }
    setCartTotalPrice(+temp.toFixed(2));
  }, [cart]);


  // Navigate to the desired page on button click
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>

      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}> <HomeIcon onClick={handleClick} className='home-icon' /> </Grid>
          <Grid item xs={12} md={8}> <Typography className="page-heading" variant="h3">My Cart</Typography> </Grid>
        </Grid>
      </div>

      <div className='new-books-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {
                  cart?.map((e: any) =>
                    <Grid item xs={12} md={12}>
                      <CartCard image={e.image} title={e.title} subtitle={e.subtitle} isbn13={e.isbn13} price={e.price} url={e.url} quantity={e.quantity} />
                    </Grid>
                  )
                }
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography className='total-text' variant='h4'>Total: $ {cartTotalPrice}</Typography>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  )
}
