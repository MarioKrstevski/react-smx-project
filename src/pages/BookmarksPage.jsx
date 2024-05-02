import { useContext, useEffect, useState } from "react";
import BooksList from "../components/BooksList";
import BookmarkedBooksContext from "../context/BookmarkedBooksContext";

export default function BookmarksPage(props) {
  const { bookmarkedBooks } = useContext(BookmarkedBooksContext);
  return (
    <div>
      {bookmarkedBooks.length === 0 && (
        <div>You have no bookmarked books yet</div>
      )}
      <BooksList books={bookmarkedBooks} />
    </div>
  );
}
