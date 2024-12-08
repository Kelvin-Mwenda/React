import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Shop, { itemsLoader } from './Shop.jsx'
//import Cart, { cakeCartLoader } from './Cart.jsx'
import Home from './Home.jsx'
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>} errorElement={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404</h1>}/>
          <Route index element={<Shop/>} loader = {itemsLoader}/>
          {/* <Route path="cart/:id" element={<Cart/>} loader = {cakeCartLoader}/> */}
          <Route path="*" element={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404</h1>}/>
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
