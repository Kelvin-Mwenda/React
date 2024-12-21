import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(){
    return (
            <>
                <div className="header shadow-sm" style={{fontFamily: "'Nothing You Could Do', cursive"}}>
                    <div className="app-logo">
                        <img src="../src/assets/MovieProfile.png" alt="Shop Icon" className="logo" />
                        <h2 style={{color: '#a04a04'}}>Chocs <span style={{fontFamily: "'Nothing You Could Do', cursive",color:'#10a702'}}>Movie Hub</span></h2>
                    </div>

                    {/* In future add a search filter and different categories navbar */ }
                    {/* <div className="menu">
                        <ul>
                            <li><a href="#about">Shop</a></li>
                            <li><a href="#task">Cart</a></li>
                            <li><a href="#task">Contact</a></li>
                        </ul>
                    </div> */}
                </div>
            </>
        )
}