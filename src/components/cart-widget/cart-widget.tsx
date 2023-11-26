import { useMyContext } from '../../context/my-context';
import { useEffect, useState } from 'react';
import router from 'next/router';
import SearchField from '../search-field/search-field';

export default function CartWidget(props: any) {
    const { cart, setCart } = useMyContext();
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    // calculate the total price of cart items
    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < cart.length; i++) {
          temp += (+cart[i].price.substring(1) * +cart[i].quantity);
        }
        setCartTotalPrice(+temp.toFixed(2));
      }, [cart]);
      
    // Navigate to the desired page on button click
    const handleClick = () => {
        router.push('/cart');
    };

    return (
        <div className="searchbar-container">
            {props.showSearchField && <SearchField />}
            <div className='cart-card' onClick={handleClick}>
                <div className='text-bold'>Cart</div>
                <div>{cart.length} items</div>
                <div>$ {cartTotalPrice}</div>
            </div>
        </div>
    )
}
