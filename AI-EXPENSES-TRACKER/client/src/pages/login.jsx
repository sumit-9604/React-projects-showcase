import { useContext, useState } from "react";
import API from "../api";
import { AuthContext } from "../content";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", data);
      login(res.data.token);
      alert("successfully login");
    } catch (err) {
      alert("Login failed. Check email or password.");
      console.error(err);
    }
  };

  return (
    <>
      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button onClick={submit}>Login</button>
    </>
  );
}