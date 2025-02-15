import {useState, useEffect} from 'react';
import './QuoteGen.css'

function Quote(){
  const [quote, setQuote] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);


  const fetchQuote = async () => {
    //set loading state and clear any previous errors
    setLoading(true);
    setError(null);
    //fetch a new quote and update state
    try {
      // Fetch random quote from Quotable API
      const response = await fetch('https://api.quotable.io/random');
      // Check if response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      // Parse the JSON data from the response
      const data = await response.json();
      // Update the quote state with fetched data
      setQuote(data);
    } catch (err) {
      // If an error occurs, set the error state with the error message
      setError(err.message);
    } finally {
      // Once done (whether successful or not), set loading to false
      setLoading(false);
    }
  }

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
            <p className="quote-text">{quote.content}</p>
            <p className="quote-author">- {quote.author}</p>
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