import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Header(props) {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();
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

          <li>
            <Link to={`/bookmarks`}>
              {" "}
              <Bookmark />
            </Link>
          </li>
          {!user ? (
            <li>
              <Link to={`/signin`}>Sign In</Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  signout();
                  navigate("/");
                }}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
