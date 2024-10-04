import { API_URL } from "./config";
import toast from "react-hot-toast";

/**
 * Logs in a user with the provided credentials by sending a POST request
 * to the authentication API endpoint.
 *
 * This function performs the following steps:
 * - Sends a request to the server with the user's credentials in JSON format.
 * - Checks the response status. If the response is not OK, it throws an error.
 * - If successful, it returns the parsed JSON response from the server.
 * - Catches any errors during the process and logs the error message,
 *   as well as showing a notification to the user indicating that something went wrong.
 *
 * @async
 * @function login
 *
 * @param {Object} credentials - The user credentials for logging in.
 * @param {string} credentials.email - The user's email address.
 * @param {string} credentials.password - The user's password.
 *
 * @returns {Promise<Object>} - A promise that resolves to the response JSON
 * from the server containing user information or an error message if login fails.
 *
 * @throws {Error} - Throws an error if the login attempt fails or if the network request fails.
 *
 * @example
 * const credentials = {
 *   email: "user@example.com",
 *   password: "password123"
 * };
 *
 * login(credentials)
 *   .then((data) => {
 *     console.log("Login successful:", data);
 *   })
 *   .catch((error) => {
 *     console.error("Login failed:", error);
 *   });
 */

export async function login(credentials) {
  try {
    const res = await fetch(`${API_URL}/auth/signIn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error("Error occured while trying to log you in!");
    return await res.json();
  } catch (err) {
    console.error(err.message);
    toast.error("Something went wrong!");
  }
}

/**
 * Signs up a new admin by sending their credentials to the API.
 *
 * @param {Object} args - The arguments for the signup process.
 * @param {Object} args.data - The credentials for the new admin.
 * @param {string} args.accessToken - The access token for authorization.
 * @param {Function} args.reset - A function to reset the state, typically called on error.
 *
 * @throws {Error} Throws an error if the API request fails.
 *
 * @returns {Promise<Object>} A promise that resolves to the response data from the API.
 */

export async function signup(args) {
  const { data: credentials, accessToken, reset } = args;

  try {
    const res = await fetch(`${API_URL}/admin/createAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error("Error occured while trying to log you in!");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
    reset();
  }
}

export async function updateAdmin(data) {
  try {
    const res = await fetch(`${API_URL}/admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Unable to save changes. Try again later.");
  } catch (err) {
    console.error(err.message);
    toast.error(err.message);
  }
}

export async function verifyAdmin(accessToken) {
  try {
    const res = await fetch(`${API_URL}/admin/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) throw new Error("Error authenticating admin.");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
    toast.error(err.message);
  }
}
