//import Header from './Header.jsx'
import { useLoaderData } from "react-router-dom"
import { Button } from 'react-bootstrap';
import { faAngleDoubleLeft, faAngleDoubleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function Shop() {
  const chocoCakes = useLoaderData()

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
                <li><a href="#task">Cart</a></li>
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
              chocoCakes.map(cake => (
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

                      <Button className="shop-icon">
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
    </>
  )
}


export const itemsLoader = async () => {
    const res = await fetch('http://localhost:4000/chocolateCakes')

    if(!res.ok){
      throw new Error('Could not find the shop cakes...')
    }

    return res.json()
  }