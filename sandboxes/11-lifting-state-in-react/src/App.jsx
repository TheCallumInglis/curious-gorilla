import { useState } from 'react';
import './App.css';
import ListBooks from './components/ListBooks';
import NewBook from './components/NewBook';

const App = () => {
  const [books, setBooks] = useState([
    {
      title: 'Fourth Wing',
      author: 'Rebecca Yarros',
    },
    {
      title: 'The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
    },
  ]);

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <NewBook setBooks={setBooks} books={books} />
        </div>
        <ListBooks books={books} />
      </div>
    </>
  );
};

export default App;
