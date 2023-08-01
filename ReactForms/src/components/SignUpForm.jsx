import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Define the handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json(); // Parse the response body as JSON
      console.log(data); // Log the API response
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 className="sign">Sign Up</h2>
      {error && <p>{error}</p>}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
