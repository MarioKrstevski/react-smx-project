import Book from "./Book";

export default function BooksList({ books }) {
  return (
    <div className="flex flex-wrap">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
