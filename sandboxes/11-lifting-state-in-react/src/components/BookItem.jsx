const BookItem = (props) => {
  return (
    <div className="bookCard">
      <h3>{props.book.title}</h3>
      <p>by {props.book.author}</p>
    </div>
  );
};

export default BookItem;
