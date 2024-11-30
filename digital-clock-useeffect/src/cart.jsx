import { useState, useEffect } from 'react';
import './index.css'; // Import CSS for animations

const products = [
    'Death Star',
    'CR90 corvette',
    'Millennium Falcon',
    'X-wing fighter',
    'TIE fighter'
];

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    // Add item to the cart
    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    // Trigger cart animation when an item is added
    useEffect(() => {
        if (cart.length === 0) return; // No animation if cart is empty
        
        setTriggerAnimation(true);
        
        const timer = setTimeout(() => {
            setTriggerAnimation(false);
        }, 900); // Duration of the animation
        
        // Clear the timer before setting a new one
        return () => clearTimeout(timer);
    }, [cart]);

    const cartClasses = triggerAnimation ? 'cart animated' : 'cart';

    return (
        <div>
            <h2>Starship Marketplace</h2>
            <ul>
                {products.map(item => (
                    <li key={item}>
                        {item} 
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </li>
                ))}
            </ul>
            <div className={cartClasses}>
                🛒 Cart ({cart.length} items)
            </div>
            <div>
                <h3>Items in Cart:</h3>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShoppingCart;