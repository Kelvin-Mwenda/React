import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import ListItem from './ListItem'
import './App'
import ErrorBoundary from './ErrorBoundary'

//API_Read_Access_Token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzgxMmUwYzE5MjlmODRjYTZhZDJlNzJhN2YxZjNlNCIsIm5iZiI6MTczNDcwNjU4NS42NDgsInN1YiI6IjY3NjU4NTk5NmNlYmE4MjliOTc0YTA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cu9LkpIZSSDe_MXM-Td4mP8DjU56zENmS8ukOpgVDWQ
const API_KEY = '23812e0c1929f84ca6ad2e72a7f1f3e4'; // Replace with your TMDb API key

export default function InfiniteList() {
  const [movies,setMovies] = useState([])//stores the data
  const [hasMore,setHasMore] = useState(true)//Indicates if more data is available
  const [page,setPage] = useState(1)//Tracks the current page
  const [fetchedPages, setFetchedPages] = useState(new Set());
  const isFetching = useRef(false); // Prevent multiple fetches

  //Function to fetch data
  const fetchMovies = async (pageNumber) => {
    if (fetchedPages.has(pageNumber) || isFetching.current) {
      return; // Avoid re-fetching the same page
    }


    isFetching.current = true; // Lock fetching
    console.log('Fetching movies for page:', pageNumber);

    try {
      console.log('Fetching movies for page:', pageNumber);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
      );

      const newMovies = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        // genre: movie.genre_ids.join(', '),
        genre: movie.genre_ids || [], // Ensure genre is always an array
        description: movie.overview,
        releaseYear: new Date(movie.release_date).getFullYear(),
        releaseMonth: new Date(movie.release_date).toLocaleString('default', { month: 'long' }),
        coverImage: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      }));

      if (newMovies.length === 0) {
        console.log('No more movies available.');
        setHasMore(false);
        return;
      }

      setFetchedPages((prev) => new Set(prev).add(pageNumber));

      // Append only if there are new movies
      setMovies((prev) => {
        const updatedMovies = [...prev, ...newMovies];
        console.log('Updated movies:', updatedMovies);
        return updatedMovies;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false);
    }finally {
      isFetching.current = false;
    }
  };


  useEffect(() => {
    fetchMovies(page)
    console.log('Current page:', page);
  },[page])

  useEffect(() => {
    console.log('Movies state updated:', movies);
  }, [movies]);

  useEffect(() => {
    console.log('Has more:', hasMore);
  }, [hasMore]);



  const handleLoadMore = () => {
    if (!hasMore || isFetching.current) {
    console.log('Skipping loadMore call: hasMore:', hasMore, ', isFetching:', isFetching.current);
    return;
  }
    if (hasMore) {
      console.log('Loading more movies...');
      setPage((prevPage) => prevPage + 1);
    }
  };



  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Latest Movies</h1>
      
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
      </div>
      <ErrorBoundary>
        <InfiniteScroll
          
          pageStart={1}
          loadMore={handleLoadMore} // Only load when required
          hasMore={hasMore} // Stops loading when false
          loader={<div key={0}>Loading...</div>}
        >
          <h1>Latest Popular Movies</h1>
          <div className='Scroll-list'>
            {Array.isArray(movies) && movies.length > 0 ? (
              movies.map((movie) => <ListItem key={movie.id} item={movie} />)
            ) : (
              <div>No movies to display.</div>
            )}
          </div>
        </InfiniteScroll>
      </ErrorBoundary>
    </div>
  );

}
