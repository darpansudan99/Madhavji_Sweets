import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../App";
import "./login.css";
import { auth } from "../../firebase"; // Adjust the path to your firebase.js file
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setLogged, setOpenSnack, setUserName } = CartState();
  const [login, setLogin] = useState({
    email: "",
    pass: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (login.email.trim() === "" || login.pass.trim() === "") {
      setOpenSnack({
        open: true,
        html: `Please fill all the fields !!`,
        severity: "error",
        time: "1500",
      });
      return;
    }

    try {
      // Use Firebase to sign in
      const res = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.pass
      );
      console.log(res);
      // Authentication successful
      const user = auth.currentUser;

      if (user) {
        setLogged(true);
        setUserName(user.email);
        localStorage.setItem("user", JSON.stringify(user.email));

        navigate("/menu");
      } else {
        setOpenSnack({
          open: true,
          html: `No matching user found! Please try again.`,
          severity: "error",
          time: "1500",
        });
      }
    } catch (error) {
      console.log(error);
      setOpenSnack({
        open: true,
        html: `Login failed. Please check your email and password.`,
        severity: "error",
        time: "1500",
      });
    }
  };

  // Handle Change for setting login details
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="bgImage">
      <div className="container">
        <div id="registerContainer">
          <h1>Log In</h1>
          <form id="registerForm" onSubmit={handleLogin}>
            <div>
              <h3>Email-Id</h3>
              <input
                type="email"
                placeholder="email@abc.com"
                required
                autoFocus
                name="email"
                id="emailLog"
                onChange={handleChange}
              />
              <h3> Password </h3>
              <input
                type="password"
                placeholder="password"
                required
                id="passlogin"
                name="pass"
                onChange={handleChange}
              />
              <p id="notice"></p>
              <button type="submit"> Login </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
