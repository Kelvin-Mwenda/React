import Header from './Header.jsx'
import './App.css'
import { useLoaderData, useParams } from 'react-router-dom'

export default function Cart() {
  const cake = useLoaderData()
  const { id } = useParams()

  return (
    <>
      <Header/>
      <div className="cart">
        <h1>{cake.name}</h1>
        <p>{cake.description}</p>
        <p>{cake.price}</p>
      </div>

      <p className="details-id">{id}</p>
    </>
  )
    
}


export const cakeCartLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch ('http://localhost:4000/items/' + id)

  if(!res.ok){
    throw new Error("Could not fetch the item's details")
  }

  return res.json()
}
