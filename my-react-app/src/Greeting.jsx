import propTypes from 'prop-types'

function Greeting(props){

    const welcomeMessage = <h2 className="welcome">
            Welcome {props.username}
        </h2>

    const loginPrompt = <h2 className="login">
            Please login to continue
        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}
Greeting.propTypes = {
    username: propTypes.string,
    isLoggedIn: propTypes.bool,
}
Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Greeting