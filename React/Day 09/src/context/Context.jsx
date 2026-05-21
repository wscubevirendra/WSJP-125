import React, { createContext, useState } from 'react'
const store = createContext();

export default function Context({ children }) {
    const [cart, setCart] = useState([]);


    function addToCart(product) {
        const findItem = cart.find((item) => item.id == product.id);
        if (findItem) {
            const products = cart.map((item) => {
                return item.id == findItem.id ? { ...item, qty: item.qty + 1 } : item
            })

            setCart(products)

        } else {
            setCart([...cart, product])

        }
    }


    function qtyHandler(flag, id) {
        const findItem = cart.find((item) => item.id == id);
        let products = [];

        if (findItem) {

            if (flag == "inc") {
                products = cart.map((item) => {
                    return item.id == findItem.id ? { ...item, qty: item.qty + 1 } : item
                })
            } else {
                products = cart.map((item) => {
                    return item.id == findItem.id ? { ...item, qty: item.qty - 1 } : item
                })
            }



        }
        setCart(products)
    }
    return (
        <store.Provider value={{ cart, addToCart, qtyHandler }}>
            {children}
        </store.Provider>
    )
}



export { store }  //named type export