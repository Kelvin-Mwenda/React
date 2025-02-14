//import {item} from './ScrollList'
import PropTypes from 'prop-types';


export default function ListItem({item}) {
  return (
    <div className='List-item' style={{border:'1px solid #ddd', margin: '10px auto', padding:'10px',maxWidth:'800px'}}>
      <h2>{item.title}</h2>
      <img src={`./src/assets/${item.image}`} alt={item.body}  className="item-image"/>
      <p>{item.body}</p>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired, // `title` is a required string
    image: PropTypes.string.isRequired, // `image` is a required string
    body: PropTypes.string.isRequired,  // `body` is a required string
  }).isRequired, // `item` object is required
};

