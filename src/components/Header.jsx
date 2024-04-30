import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Bookstore</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={`/`}>Home</Link>
          </li>

          <li>
            <Link to={`/books`}>Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
