import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const CartContext = createContext(null)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartLoading, setCartLoading] = useState(true)



    const cartInfo = {
        cart, cartLoading
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
CartProvider.propTypes = {
    children: PropTypes.node
};