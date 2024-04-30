import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/books",
          element: <BooksPage />,
        },
        {
          path: "*",
          element: (
            <div>
              404 not found <a href="">Go back</a>{" "}
            </div>
          ),
        },
      ],
    },
  ]);
  // some context
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
