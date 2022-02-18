import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div id="try1">
      <p id="try2">Chore Split</p>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p></p>
          <p>
            Don't have an account? &nbsp;
            <button
              className="try3"
              color="secondary"
              onClick={() => setShowLogin(false)}
            >
              Create Account
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div></div>
          <p>
            Already have an account? &nbsp;
            <button
              className="try3"
              color="secondary"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
