import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Kuhama 🏡</h1>
      <p>Find the best student apartments with ease.</p>
      <div style={styles.buttonContainer}>
        <Link to="/listings" style={styles.button}>View Listings</Link>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/register" style={styles.button}>Sign Up</Link>
      </div>
    </div>
  );
}

// Simple inline styles (you can replace with CSS or Tailwind)
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "5px",
  },
};

export default Home;
