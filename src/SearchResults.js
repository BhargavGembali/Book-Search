import React from 'react';
import './styles.css';

const SearchResults = ({ results }) => {
  return (
    <ul className="results">
      {results.map((book, index) => (
        <li key={index} className="result-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.publishYear}</p>
          {book.cover && <img src={book.cover} alt={book.title} className="book-cover" />}
          <a href={book.link} target="_blank" rel="noopener noreferrer" className="view-button">
            View Book
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
