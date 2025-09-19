import React, { useState } from "react";
import "./App.css";

const users = [
  { username: "ayaan", password: "1234" },
  { username: "hayat", password: "1234" },
  { username: "ayan", password: "1234" }
];
const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if entered credentials match any user in the array
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="app">
      <div className="login-container">
        {isLoggedIn ? (
          <div className="welcome">
            <h2>Welcome, {username}!</h2>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
