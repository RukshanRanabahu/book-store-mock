import BookStoreCard from '@/components/cards/book-store-card';
import { Box, Grid, Typography } from '@mui/material';
import { useMyContext } from '../context/my-context';
import CartCard from '@/components/cards/cart_card';

export default function Cart() {
  const { cart, setCart } = useMyContext();

  return (
    <div>
      <div>
        <Typography className="page-heading" variant="h3">My Cart</Typography>
      </div>

      <div style={{ margin: '40px' }}>
        <div>
          <Typography variant="h6">New Books</Typography>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
              cart?.map((e: any) =>
                <Grid item xs={12} md={7}>
                  <CartCard image={e.image} title={e.title} subtitle={e.subtitle} isbn13={e.isbn13} price={e.price} url={e.url} quantity={e.quantity}/>
                </Grid>
              )
            }
          </Grid>
        </Box>
      </div>

    </div>
  )
}
