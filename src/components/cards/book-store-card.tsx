import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useMyContext } from '../../context/my-context';
import router from 'next/router';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

type BooksArray = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BookStoreCard(props: BooksArray) {
    const theme = useTheme();
    const { cart, setCart } = useMyContext();
    const [itemCount, setItemCount] = React.useState(1);
    const { selectedItem, setSelectedItem } = useMyContext();
    const [open, setOpen] = React.useState(false);

    // route to book details page
    const handleClickBookStoreCard = () => {
        router.push('/book-details');
        setSelectedItem({ ...props, quantity: itemCount });
    }

    // snack bar handling
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <Grid container spacing={2}>
                    {/* card image */}
                    <Grid item xs={4} md={3} className='test' onClick={handleClickBookStoreCard} style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            // sx={{ width: 151 }}
                            image={props.image}
                            alt=""
                            classes="test"
                        />
                    </Grid>
                    {/* item details */}
                    <Grid item xs={8} md={6} className='test' onClick={handleClickBookStoreCard} style={{ cursor: 'pointer' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="subtitle1">
                                    {props.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {props.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {props.isbn13}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {props.price}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    {/* add to cart */}
                    <Grid item xs={12} md={3} className='allign-card-buttons'>
                        <Box className="cart-button-box">
                            <TextField
                                id="outlined-number"
                                label=""
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                defaultValue={itemCount}
                                size="small"
                                className='cart-textfield'
                                onChange={(event: any) => setItemCount(event.target.value)}
                            />
                            <Button
                                size="small"
                                className='button-black-border'
                                variant="outlined"
                                onClick={() => {
                                    setCart([...cart, {
                                        isbn13: props.isbn13,
                                        price: props.price,
                                        title: props.title,
                                        subtitle: props.subtitle,
                                        image: props.image,
                                        url: props.url,
                                        quantity: itemCount,
                                    }]);
                                    handleClick();
                                }
                                }
                            >add to cart</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
            {/* success message snackbar after a item add */}
            {/*  ****** not on the requirements - added as a extra feature ****** */}
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Added {itemCount} items successfully to the cart
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}