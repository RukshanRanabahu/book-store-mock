import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material';
import { useContext } from 'react';
import { useMyContext } from '../../context/my-context';
import router from 'next/router';

type BooksArray = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string
}

export default function BookStoreCard(props: BooksArray) {
    const theme = useTheme();
    const { cart, setCart } = useMyContext();
    const [open, setOpen] = React.useState(false);
    const [itemCount, setItemCount] = React.useState(1);
    const { selectedItem, setSelectedItem } = useMyContext();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickBookStoreCard = () => {
        router.push('/book-details');
        setSelectedItem({...props, quantity: itemCount});
      }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Card sx={{ display: 'flex' }}>
            <Grid container spacing={2}>
                    <Grid item xs={4} md={3} className='test' onClick={handleClickBookStoreCard} style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            // sx={{ width: 151 }}
                            image={props.image}
                            alt=""
                            classes="test"
                        />
                    </Grid>

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
                {/* </span> */}
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
                            style={{ width: "60px" }}
                            onChange={(event: any) => setItemCount(event.target.value)}
                        />
                        <Button
                            size="small"
                            style={{
                                border: "1px solid black",
                                color: "black",
                                // width: '140px'
                            }}
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
                                }]),
                                handleClick
                            }
                            }
                        >add to cart</Button>
                    </Box>

                    {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar> */}
                </Grid>
            </Grid>
        </Card>
    );
}