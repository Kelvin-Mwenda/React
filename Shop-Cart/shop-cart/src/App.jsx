import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Shop from './Shop.jsx'
//import Cart, { cakeCartLoader } from './Cart.jsx'
import Home from './Home.jsx'
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>} errorElement={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404 Not Found!</h1>}/>
          <Route index element={<Shop/>}/>
          <Route path="cart/" element={<Cart/>}/>
          <Route path="*" element={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404 Not Found!</h1>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
