import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        nickname,
        picture,
        password,
        password_confirmation: passwordConfirmation,
      }),
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="nickname">Nickname:</label>
        <input
          type="text"
          id="nickname"
          autoComplete="off"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="picture">Picture:</label>
        <input
          type="text"
          id="picture"
          autoComplete="off"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input
          type="text"
          id="password_confirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {" "}
          {isLoading ? "Loading..." : "Create"}
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

export default SignUpForm;
