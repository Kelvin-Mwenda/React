
export default function Header(){
    return (
            <>
                <div className="header">
                    <div className="app-logo">
                        <img src="./src/assets/list.svg" alt="List Icon" className="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>Task</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </>
        )
}