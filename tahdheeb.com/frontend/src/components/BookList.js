import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Tahdheeb al-Ahkam</h1>
      {books.map(book => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
          <p>Übersetzungsfortschritt: {book.translated_hadith} von {book.total_hadith} Hadithen</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
