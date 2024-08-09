import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  // handleSearch function
  const handleSearch = async (query) => {
    if (query.trim() !== '') {
      try {
        const response = await axios.get('https://book-search-backend-production-de33.up.railway.app/search', { params: { query } });
        setResults(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching book links:', error.message);
        setError('Failed to fetch book links. Please try again.');
      }
    } else {
      setResults([]);
      setError('');
    }
  };

  // Update the query state and trigger search on change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value); // Trigger search immediately on each change
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          id="input"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search by book titles..."
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="results-container">
        {results.length === 0 && !error ? (
          <p className='prompt-message'>Search For Books!</p>
        ) : (
          <ul className="results">
            {results.map((book, index) => (
              <li key={index} className="result-item">
                <img src={book.cover} alt={`Cover of ${book.title}`} className="book-cover" />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="View">
                  View
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
