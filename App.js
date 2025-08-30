
import React, { useState } from 'react';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (bookTitle) => {
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Book Finder</h1>
      <BookSearch onSearch={fetchBooks} />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default App;
