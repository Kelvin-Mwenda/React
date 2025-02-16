import {useState, useEffect} from 'react';
import './QuoteGen.css'

function Quote(){
  const [quote, setQuote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);


  const fetchQuote = async () => {
    // Read the API key from your .env file
    const apiKey = import.meta.env.VITE_APP_ID;

    // Set loading state and clear any previous errors
    setLoading(true);
    setError(null);

    try {
      // Make a GET request to the FavQs Quote of the Day API
      const response = await fetch('/api/qotd', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // The FavQs API expects the API key in the format: "Token token=YOUR_API_KEY"
          'Authorization': `Token token=${apiKey}`
        }
      });

      console.log('API KEY:', import.meta.env.VITE_APP_ID);


      // Check if the response is successful (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      // Parse the JSON data from the response
      const data = await response.json();
      console.log(data)

      // Update the quote state with the fetched data
      setQuote(data);
    } catch (err) {
      // If an error occurs, set the error state with the error message
      setError(err.message);
    } finally {
      // Once done (whether successful or not), set loading to false
      setLoading(false);
    }
};


  // useEffect hook to fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);//Empty dependency array to ensure the effect runs only once on mount


  return(
    <div className='quote-generator'>
      {/* Conditional rendering based on state */}
      
      {
      loading ? (<p>Loading...</p>) : error? (<p className="error">Error: {error}</p>) : (//When quote is available, display it 
      quote && (
          <>
            <h3 className="quote-text">{quote.quote.body}</h3>
            <p className="quote-author">- {quote.quote.author}</p>
          </>
        )
      )
      }
      {/* Button to fetch a new quote on click */}
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  )
}

export default Quote;