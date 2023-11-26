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


export default function CartCard(props: any) {
    const { cart, setCart } = useMyContext();
    const [itemCount, setItemCount] = React.useState(1);

    const modifieItem = (isbn13: string) => {
        console.log(isbn13);
        const filterdCart = cart.map(obj => {
            if (obj.isbn13 === isbn13) {
                return { ...obj,  quantity: +itemCount };
            }
            return obj;
        })
        console.log('filterdCart',filterdCart);
        setCart(filterdCart);
      };


    const removeItem = (isbn13: string) => {
        const filterdCart = cart.filter(function (item) {
            return isbn13 !== item.isbn13;
        })
        setCart(filterdCart);
      };

    return (
        <Card sx={{ display: 'flex' }}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={3} className='test'>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={props.image}
                        alt=""
                        classes="test"
                    />
                </Grid>

                <Grid item xs={8} md={4} className='test'>
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

                <Grid item xs={4} md={2} className='cart-textfield-box'>
                    <Box className="cart-textfield-box">
                        <TextField
                            id="outlined-number"
                            label=""
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={+props.quantity}
                            size="small"
                            style={{ width: "60px" }}
                            onChange={(event: any) => setItemCount(event.target.value)}
                        />
                    </Box>
                </Grid>

                <Grid item xs={6} md={2} className='cart-textfield-box'>
                    <Box className="cart-textfield-box">
                        <Button
                            size="small"
                            style={{
                                border: "1px solid black",
                                color: "black",
                                // width: '140px'
                            }}
                            variant="outlined"
                            onClick={() => modifieItem(props.isbn13)}
                        >Update</Button>

                        <Button
                            size="small"
                            style={{
                                border: "1px solid black",
                                color: "black",
                                marginTop: '20px',
                                marginBottom: '20px'
                                // width: '140px'
                            }}
                            variant="outlined"
                            onClick={() => removeItem(props.isbn13)}
                        >Remove</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}