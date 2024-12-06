
export default function Header(){
    return (
            <>
                <div className="header">
                    <div className="app-logo">
                        <img src="./src/assets/list.svg" alt="List Icon" className="logo" />
                        <h2>Choco<span style={{color:'#10a702'}}>Todo-List</span></h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#tasks">Task</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
}