import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

type CartItem = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string,
    quantity: number;
};

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

const newBooksData: NewBooks = {
    error: "0",
    total: "0",
    books: []
};

const selectedItemData: CartItem = {
    title: '',
    subtitle: '',
    isbn13: '',
    price: '',
    image: '',
    url: '',
    quantity: 0,
};

type MyContextProps = {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
    selectedItem: CartItem;
    setSelectedItem: Dispatch<SetStateAction<CartItem>>;
    newBooks: NewBooks;
    setNewBooks: Dispatch<SetStateAction<NewBooks>>
};

const BookStoreContext = createContext<MyContextProps | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(BookStoreContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};

interface MyContextProviderProps {
    children: ReactNode;
}

export const BookStoreContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [newBooks, setNewBooks] = useState<NewBooks>(newBooksData);
    const [selectedItem, setSelectedItem] = useState<CartItem>(selectedItemData);

    return (
        <BookStoreContext.Provider value={{ cart, setCart, selectedItem, setSelectedItem, newBooks, setNewBooks }}>
            {children}
        </BookStoreContext.Provider>
    );
};
