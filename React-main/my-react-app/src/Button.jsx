


function Button(){

    let imageurl = '.src/assets/Kelvin.jpg'

    let count = 0

    const handleClick = (name) =>{
        if (count < 3){
            count++
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    }

    const handleClick2 = (e) => e.target.textContent = 'OUCH!'

    const handleClick3 = (e) => e.target.style.display = 'none'

    return(
        <>
            <button onClick={() => handleClick('Chocs')}>Click Me</button>
            <button onClick={(e) => handleClick2(e)}>Click Me</button>
            <button onDoubleClick={() => handleClick('Chocs')}>Click Me</button>
            <img onClick = { (e) => handleClick3(e)} src={imageurl}></img>
        </>
    )
}

export default Button;
