import { useEffect } from "react";
import BooksList from "../components/BooksList";
import { useState } from "react";
import jsonBooks from "../data/books.json";
import { useParams, useSearchParams } from "react-router-dom";

export default function BooksPage(props) {
  //   const bookId =  useParams()
  //   const params = useSearchParams()
  //   params.name

  const [books, setBooks] = useState(null);

  function fetchBooks() {
    // fetch("https://bookshop.org/categories/m/popular-books")
    //   .then((e) => e.json())
    //   .then((books) => {
    //     console.log(books);
    //     setBooks(books);
    //   });
    setTimeout(() => {
      setBooks(jsonBooks.data);
    }, 300);
  }
  useEffect(function () {
    fetchBooks();
  }, []);

  if (!books) {
    return (
      <div>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        These are our most selled books
      </h1>

      <BooksList books={books} />
    </div>
  );
}
