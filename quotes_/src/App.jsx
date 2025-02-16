import Quote from './Quote'; // Import the QuoteGenerator component
import './App.css'; // Optional: existing App-level styling

function App() {
  return (
    <div className="App">
      <h1>Quotes</h1>
      {/* Render the QuoteGenerator component */}
      <Quote />
    </div>
  );
}

export default App;
