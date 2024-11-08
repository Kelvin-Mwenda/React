import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../pages/Breadcrumbs'


export default function Header(){


    return(
        <>
            <div className="root-layout">
                <header>
                    <nav>
                        <h1>WESONGA</h1>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="actions">Projects</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <NavLink to="donate"><button className="donate-button">Donate</button></NavLink>
                    </nav>
                    <Breadcrumbs/>
                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
