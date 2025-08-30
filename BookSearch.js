
import React, { useState } from 'react';

function BookSearch({ onSearch }) {
  const [bookTitle, setBookTitle] = useState('');

  const handleSearch = () => {
    if (bookTitle.trim()) {
      onSearch(bookTitle);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-lg w-64"
        placeholder="Search for a book"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
}

export default BookSearch;
