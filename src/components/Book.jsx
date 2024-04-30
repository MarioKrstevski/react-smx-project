export default function Book({ book }) {
  return (
    <div className="border p-2 m-2 w-72">
      <h3>
        {book.Title} - {book.Year}
      </h3>
      <div>
        <div>{book.Publisher}</div>
        <div>{book.Pages}</div>
      </div>
    </div>
  );
}
