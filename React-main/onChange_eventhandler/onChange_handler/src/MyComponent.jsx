import {useState} from 'react'

//onChange = event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio>
//           Triggers a function every time the value of the input changes

function MyComponent(){
    
    const [name, setName] = useState("")
    const [quantity,setQuantity] = useState("")
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleName(event){
        setName(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(
        <>
            <input value={name} type="text" onChange={handleName} placeholder="Enter Name"/>
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={handleQuantity} placeholder="1"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} placeholder="Enter delivery instructions" type="text" onChange={handleComment} />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value=''>Select an option</option>
                <option value='Visa'>Visa</option>
                <option value='MasterCard'>Master Card</option>
                <option value='GiftCard'>Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShipping} /> Delivery
                <br/>
                <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShipping} /> Pick Up
                <p>Shipping: {shipping}</p>
            </label>
        </>
    )
}

export default MyComponent