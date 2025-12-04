// src/error-page.jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); // This hook gives you access to the error object
  console.error(error); // Log the error for debugging purposes

  return (
    <div id="error-page" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* Display a more specific error message if available */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}