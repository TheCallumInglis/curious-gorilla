import BookItem from './BookItem';

const ListBooks = ({ books }) => {
  return (
    <div className="bookCardsDiv">
      {books.map((book, idx) => (
        <BookItem key={idx} book={book} />
      ))}
    </div>
  );
};

export default ListBooks;
