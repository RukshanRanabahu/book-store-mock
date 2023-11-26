// Import necessary modules from React
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

// Define the type for individual items in the cart
type CartItem = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string,
    quantity: number;
};

// Define the type for individual books
type BooksArray = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string
}

// Define the type for the response of fetching new books
type NewBooks = {
    error: string,
    total: string,
    books: BooksArray[]
};

// Initial data for new books
const newBooksData: NewBooks = {
    error: "0",
    total: "0",
    books: []
};

// Initial data for a selected item 
const selectedItemData: CartItem = {
    title: '',
    subtitle: '',
    isbn13: '',
    price: '',
    image: '',
    url: '',
    quantity: 0,
};

// Define the properties that the context should hold
type MyContextProps = {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
    selectedItem: CartItem;
    setSelectedItem: Dispatch<SetStateAction<CartItem>>;
    newBooks: NewBooks;
    setNewBooks: Dispatch<SetStateAction<NewBooks>>
};

// Create the context with an initial value of undefined
const BookStoreContext = createContext<MyContextProps | undefined>(undefined);

// Custom hook to use the context
export const useMyContext = () => {
    const context = useContext(BookStoreContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};

// Props for the context provider component
interface MyContextProviderProps {
    children: ReactNode;
}

// Context provider component to wrap around the application
export const BookStoreContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    // State to manage the cart, new books, and selected item
    const [cart, setCart] = useState<CartItem[]>([]);
    const [newBooks, setNewBooks] = useState<NewBooks>(newBooksData);
    const [selectedItem, setSelectedItem] = useState<CartItem>(selectedItemData);

    return (
        // Provide the context value to the components in the tree
        <BookStoreContext.Provider value={{ cart, setCart, selectedItem, setSelectedItem, newBooks, setNewBooks }}>
            {children}
        </BookStoreContext.Provider>
    );
};
