import styles from './userGreeting.module.css'

import propTypes from 'prop-types'

function userGreeting(props){

    const welcomeMessage = <h2 className={styles.userName}>Welcome {props.username}!</h2>

    const loginPrompt = <h2 className={styles.isLogged}>Please log in to see your greeting.</h2>

        return(props.isLoggedIn ? welcomeMessage : loginPrompt )

}

userGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

userGreeting.defaultProps={
    isLoggedIn : false,
    username: "guest",
}

export default userGreeting;