import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

type CartItem = {
    isbn13: string;
    price: string;
    quantity: number;
};

type MyContextProps = {
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
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
    
    return (
        <BookStoreContext.Provider value={{ cart, setCart }}>
            {children}
        </BookStoreContext.Provider>
    );
};
