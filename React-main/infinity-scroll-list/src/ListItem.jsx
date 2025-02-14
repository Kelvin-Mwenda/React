import PropTypes from "prop-types"
import './App'

export default function ListItem({ item }) {
  return (
    <div
      className="List-item"
    >
      {/* Movie Cover Image */}
      <img
          src={item.coverImage}
          alt={item.title}
          style={{
              width: '150px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px',
          }}
      />

      {/* Movie Details */}
      <div style={{ flex: '1' }}>
          <h2 style={{ margin: '0 0 10px' }}>{item.title}</h2>
          <p>
              <strong>Release Date:</strong> {item.releaseYear}
          </p>
          <p>
              <strong>Release Date:</strong> {item.releaseMonth}
          </p>
          <p>
              <strong>Description:</strong> {item.description}
          </p>
      </div>
    </div>
  )
}


// PropTypes Validation
ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired, 
        releaseMonth: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired, // Image URL
    }).isRequired,
};
