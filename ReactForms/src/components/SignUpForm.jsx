import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Define the handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh

    console.log("Form submitted!"); // Log a short message
    // form submission logic here
  };

  return (
    <div>
      <h2 className="sign">Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
