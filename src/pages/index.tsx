import Image from 'next/image'
import { useContext, useEffect, useState } from 'react';
import TypographyComponent from '../atoms/typography/typography';
import Constants from '../constants.json'
import SearchField from '@/atoms/common-components/search-field';
import { Box, Button, Grid } from '@mui/material';
import axios from 'axios';
import BookStoreCard from '@/molecules/cards/book-store-card';
import { useMyContext } from '../pages/my-context';

const typography_variants = Constants.typography_variants;

type BooksArray = {
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string
}

type NewBooks = {
  error: string,
  total: string,
  books: BooksArray[]
};

const newBooksdata: NewBooks = {
  error: "0",
  total: "0",
  books: []
};

export default function Home() {
  const [newBooks, setNewBooks] = useState<NewBooks>(newBooksdata);
  const [ cartTotalPrice, setCartTotalPrice ] = useState(0);
  const { cart, setCart } = useMyContext();
   
  useEffect(() => {
    let temp = 0;    
    for(let i=0; i<cart.length; i++){
      temp+= +cart[i].price.substring(1);
      console.log(+cart[i].price.substring(1));
      console.log("-------",temp);
    }
    setCartTotalPrice(+temp.toFixed(2));
  },[cart]);

    useEffect(() => {
    axios.get('https://api.itbook.store/1.0/new')
      .then(response => {
        setNewBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <div>
        <TypographyComponent className="page-heading" text_variant={typography_variants.h3} name="Book Store" />
      </div>

      <div className="searchbar-container">
        <SearchField />
        <div className='cart-card'>
          <div style={{ fontWeight: 'bold' }}>Cart</div>
          <div>{cart.length} items</div>
          <div>$ {cartTotalPrice}</div>
        </div>
      </div>

      <div style={{ margin: '40px' }}>
        <div><TypographyComponent text_variant={typography_variants.h6} name="New Books" /></div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
              newBooks.books?.map((e) =>
                <Grid item xs={12} md={6} className='test'>
                  <BookStoreCard image={e.image} title={e.title} subtitle={e.subtitle} isbn13={e.isbn13} price={e.price} />
                </Grid>
              )
            }
          </Grid>
        </Box>
      </div>
    </div>
  )
}
