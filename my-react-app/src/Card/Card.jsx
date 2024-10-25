import styles from './Card.module.css'
import propTypes from 'prop-types'


function Card(props){

    return(
        <div className={styles.card}>
            <img alt="Profile picture" className={styles.cardImage} src={props.profilePic}></img> 
            <h2 className={styles.cardTitle}>{props.name}</h2>
            <p className={styles.cardText}>{props.text}</p>
        </div>
    )
}
Card.propTypes = {
    name: propTypes.String,
    text: propTypes.String,
    profilePic: propTypes.String,
}
Card.defaultProps = {
    name: 'Unknown',
    text: 'No description provided',
    profilePic:'./src/assets/react.svg',
}

export default Card;