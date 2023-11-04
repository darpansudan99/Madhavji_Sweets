import React, { useState } from "react";
import { auth } from "../../firebase"; // Adjust the path to your firebase.js file
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // Handle user registration
  const handleRegister = async () => {
    if (password !== reenteredPassword) {
      setError("Re-entered password does not match");
      return;
    }

    try {
      // Create a new user account using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Once the user is registered successfully, you can redirect to the desired page or perform other actions.
      const user = userCredential.user;
      await updateProfile(user, {
      displayName: username, // Set the user's name
      });
      // For example, you can save the user's username to Firebase's Firestore database here.

      console.log("Registration successful");

      // Redirect to the desired page after successful registration.
      navigate("/menu");
    } catch (error) {
      // Handle registration errors
      console.log(error);
      setError("Registration error: " + error.message);
    }
  };

  return (
    <div className="bgImage">
      <div className="container">
        <div id="registerContainer">
          <h1>Register</h1>
          <form id="registerForm">
            <div>
              <h3>Email-Id</h3>
              <input
                type="email"
                placeholder="email@abc.com"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>User Name</h3>
              <input
                type="text"
                placeholder="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <h3>Password</h3>
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h3>Re-Enter Password</h3>
              <input
                type="password"
                placeholder="password"
                required
                value={reenteredPassword}
                onChange={(e) => setReenteredPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="button" onClick={handleRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;