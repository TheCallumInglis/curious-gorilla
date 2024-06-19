import { useState } from 'react';

const NewBook = ({ setBooks, books }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
    });
  };

  const handleInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newBook.title}
        onChange={handleInputChange}
      />
      <label htmlFor="title">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBook;
