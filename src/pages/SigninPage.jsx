import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignInPage(props) {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      SignInPage works
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          //   api.signin()
          if (username === "smx" && password === "12345") {
            signin({
              username,
              password,
            });
            navigate("/books");
          } else {
            // handle error
          }
        }}
      >
        <input
          type="text"
          name="username"
          className="border"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          className="border"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="border bg-blue-50 p-6">Sign In</button>
      </form>
    </div>
  );
}
