import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() !== '') {
      const response = await axios.get(`https://book-search-backend-production-de33.up.railway.app/search`, { params: { query } });
      setResults(response.data);
    }
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        <ul className="results">
          {results.map((book, index) => (
            <li key={index} className="result-item">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer" className='View'>
                View 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
