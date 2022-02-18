import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <p>Please Log In</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          id="password"
          name="description"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {" "}
          {isLoading ? "Loading..." : "Login"}
        </button>
        <form>
          {errors.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </form>
      </form>
    </>
  );
}

export default LoginForm;
