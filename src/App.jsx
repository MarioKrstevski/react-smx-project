import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import BookmarksPage from "./pages/BookmarksPage";
import BookmarkedBooksContext from "./context/BookmarkedBooksContext";
import SignInPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignupPage";
import AuthContext from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/bookmarks",
        element: (
          <ProtectedRoute>
            <BookmarksPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/books",
        element: (
          <ProtectedRoute>
            <BooksPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: (
          <div>
            404 not found <Link to={"/"}> Go back </Link>
          </div>
        ),
      },
    ],
  },
]);
function App() {
  // const {user,signin,signout} = useAuth()
  // const [bookmarkedBooks, setBookmarkedBooks] = useLSState('bookmarked-books', [])
  const bookmarkedBooksInitial =
    JSON.parse(window.localStorage.getItem("bookmarked-books")) || [];

  const [bookmarkedBooks, setBookmarkedBooks] = useState(
    bookmarkedBooksInitial
  );

  const userInitial =
    window.localStorage.getItem("auth-token") || null;

  let userInitialDecrypted = userInitial ? atob(userInitial) : null;

  const [user, setUser] = useState(userInitial);
  function signin(userInfo) {
    setUser(userInfo);
  }
  function signout() {
    setUser(null);
    window.localStorage.setItem("auth-token", null);
  }
  //effect description
  useEffect(() => {
    window.localStorage.setItem(
      "bookmarked-books",
      JSON.stringify(bookmarkedBooks)
    );
  }, [bookmarkedBooks]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(
        "auth-token",
        btoa(JSON.stringify(user))
      );
    }
  }, [user]);

  // some context
  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          signin,
          signout,
        }}
      >
        <BookmarkedBooksContext.Provider
          value={{
            bookmarkedBooks,
            setBookmarkedBooks,
          }}
        >
          <RouterProvider router={router}></RouterProvider>
        </BookmarkedBooksContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
