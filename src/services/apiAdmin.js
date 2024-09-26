import toast from "react-hot-toast";

export async function login(credentials) {
  try {
    const res = await fetch(`/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
export async function signup(credentials) {
  try {
    const res = await fetch(``, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    const res = await fetch(``, {
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
