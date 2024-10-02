import { API_URL } from "./config";
import toast from "react-hot-toast";

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

export async function signup(credentials, accessToken) {
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
    toast.error("Something went wrong!");
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
