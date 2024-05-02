import {
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
} from "lucide-react";
import { useContext } from "react";
import BookmarkedBooksContext from "../context/BookmarkedBooksContext";

export default function Book({ book }) {
  const { bookmarkedBooks, setBookmarkedBooks } = useContext(
    BookmarkedBooksContext
  );
  // console.log(setBookmarkedBooks);
  function handleBookmark(book) {
    //save to ls
    console.log(book);
    // read

    if (bookmarkedBooks) {
      const currentBook = bookmarkedBooks.find(
        (b) => b.id === book.id
      );

      // check if exists
      if (currentBook) {
        setBookmarkedBooks(
          bookmarkedBooks.filter((b) => b.id !== book.id)
        );

        return;
      }
      // if it doesnt add it

      setBookmarkedBooks([...bookmarkedBooks, book]);

      // save
    } else {
      console.log("here");
      setBookmarkedBooks([book]);
    }
  }
  const currentBook = bookmarkedBooks.find((b) => b.id === book.id);
  return (
    <div className="border p-2 m-2 w-72">
      <h3>
        {book.Title} - {book.Year}
      </h3>
      <div>
        <div>{book.Publisher}</div>
        <div>{book.Pages}</div>
      </div>

      <button onClick={() => handleBookmark(book)}>
        {/* <button onClick={handleBookmark}> */}
        {currentBook ? <BookmarkMinus /> : <BookmarkPlus />}
      </button>
    </div>
  );
}
