import { Button } from 'react-bootstrap';
import { faAngleDoubleLeft, faAngleDoubleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { chocolateCakes } from "./chocolate";
import { useState } from 'react';

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            return prevCart.map(cartItem =>
              cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1,totalQuantity: (item.quantity + 1) * item.price }
              : cartItem
            );
          }
        else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      }
    )
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => total + item.totalQuantity, 0);

  const removeItem = (id) => {
    setCart(c => c.filter(item => item.id !== id))
  }

  const addQuantity = (id) => {
    setCart(prevCart => 
        prevCart.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1, totalQuantity: (item.quantity + 1) * item.price } : item
        )
    );
}

const reduceQuantity = (id) => {
    setCart(prevCart => 
        prevCart.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1, totalQuantity: (item.quantity - 1) * item.price} : item
        )
    );
}


  function scrollleft(){
    var left = document.querySelector('.testimonial');
    left.scrollBy(390,0);
  }

  function scrollright(){
    var right = document.querySelector('.testimonial');
    right.scrollBy(-390,0);
  }

  return (
    <>
      <div className="header" style={{fontFamily: "'Nothing You Could Do', cursive"}}>
        <div className="app-logo">
            <img src="../src/assets/cart.png" alt="Shop Icon" className="logo" />
            <h2 style={{fontFamily: "'Nothing You Could Do', cursive",color: '#a04a04'}}>Choco <span style={{color:'#070707'}}>Shop Cart App</span></h2>
        </div>

        <div className="menu">
            <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#task"><i className="fas fa-cart-plus">1</i></a></li>
                <li><a href="#task">Contact</a></li>
            </ul>
        </div>
      </div>


      <div className="shop-list">
        <h1 style={{fontFamily: "'Nothing You Could Do', cursive",fontSize: '1.5rem',fontWeight:'bold'}}>Welcome to Choc&#39;s Shop</h1>

        <div className="testimonial-container">
          <div className="scroll-button">
            <Button variant="success" className="icon" onClick={() => {scrollright()}}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Button>
          </div>
          
          <div className="testimonial">
            {
              chocolateCakes.map(cake => (
                <div key={cake.id}  className="testimonial-text">
                  <div className="testimonial-image">
                    <img src={`../src/assets/${cake.image}.jpg`} alt={`${cake.name}`} className="test-image"/>
                  </div>

                  <div className="test-text">
                    <h3 className="text-center fw-bold" style={{fontFamily: "'Nothing You Could Do', cursive",color: '#070707',fontSize: '1.2rem'}}>
                      {`${cake.name}`}
                    </h3>
                    <p className="text-center" style={{maxWidth:'150px',fontSize: '0.85rem'}}>
                      {cake.description}
                    </p>
                    <p className="text-center fw-bold">
                      {`Ksh. ${cake.price}.00`}
                    </p>

                    <Button className="shop-icon" onClick={() => addItem(cake)}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                  </div>
              </div>
              ))
            }
          </div>

          <div className="scroll-button ms-2">
            <Button variant="success" className="icon" onClick={scrollleft}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
          </div>
        </div>

      </div>

      <div className="Cart">
        {
          cart.length === 0 ? (
            <h2></h2>
        ): (
          <div>
            <h1>Your Cart</h1>
            <p style={{fontFamily: "'Nothing You Could Do', cursive",color:'green'}}>{totalItems} Items</p>
          </div>
          
        )
        }
        
      </div>
      <div className="cart">
        {
          cart.length === 0 ? (
            <h2 style={{fontFamily: "'Nothing You Could Do', cursive"}}>Your cart is empty.</h2>
          ) : 
          (
            cart.map((item,index) => (
                <div className="cart-item" key={index}>
                  <div>
                    <img className="cart-image" src={`../src/assets/${item.image}.jpg`} alt={item.description} />
                    <h1 style={{fontFamily: "'Nothing You Could Do', cursive"}}>{item.name}</h1>
                  </div>
                  
                  <div>
                    <p style={{fontWeight:'bold'}}><span style={{fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold',margin:'20px auto'}}>Price: Ksh.</span> {item.price}.00</p>
                    <p><span style={{fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold',margin:'20px auto'}}>Quantity:</span> {item.quantity}</p>
                    <p><span style={{fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold',margin:'20px auto'}}>Total: Ksh.</span> {item.totalQuantity}.00</p>

                    
                    <div>
                      <button onClick={() => reduceQuantity(item.id)} style={{background:'green', border:'none',borderRadius:'4px',padding:'6px 10px',margin:'20px',color:'white',fontWeight:'bold'}}>
                        -
                      </button>
                      {item.quantity}
                      <button onClick={() => addQuantity(item.id)} style={{background:'green', border:'none',borderRadius:'4px',padding:'6px 10px',margin:'20px',color:'white',fontWeight:'bold'}}>
                        +
                      </button>
                    </div>
                    

                    <button onClick={() => removeItem(item.id)} style={{background:'#BC0305', border:'none',borderRadius:'4px',padding:'4px 6px',margin:'20px'}}>
                      Remove
                    </button>
                  </div>
                </div>
              )
            )
          )
        }
      </div>

      <div>
        <h1 style={{fontFamily: "'Nothing You Could Do', cursive"}}>Total: Ksh. {totalPrice}.00</h1>
      </div>
    </>
  )
}