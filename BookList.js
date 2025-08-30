
import React from 'react';

function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.key} className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="font-bold">{book.title}</h2>
          <p className="text-sm text-gray-600">
            {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
          </p>
          <p className="text-xs text-gray-500">{book.first_publish_year}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
