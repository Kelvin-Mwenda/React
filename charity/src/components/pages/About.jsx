import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){
    const [user,setUser] = useState('chocs')

    if(!user){
        return <Navigate to="/" replace={true}/>
    }

    return(
        <>
            <div className="about-us">
                <h1 className="about">About Us</h1>
                <div className="about-content">
                    <p>The Fr. Wasonga Education and Development Fund is a non-governmental organization supporting the educational and development needs of Children with a special focus on girls who have over the years, been exposed to different types of vulnerabilities, and the boy child, whose plight is emerging as a key issue of concern in the modern world.</p>
                    <p>The Wasonga Girls and Boy Education and Development Fund (WGBED) is founded on the Christ’s teaching in <br/>Mathew 25: 40 <br/><i>&#39;…Whatever you did  to  one of the least of these brothers and sisters of mine, you did for me.&#39;</i></p>
                    <p>The fund was formally instituted in the year …. However a lot of education support activities had taken place before then, and now the fund boasts of 20 beneficiaries, some of whom have transited to employment while …. are still in school.</p>
                </div>

                <button onClick={() => setUser(null)}>Logout</button>
            </div>
        </>
    )
}