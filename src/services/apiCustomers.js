import { API_URL } from "./config";

export async function getCustomers() {
  const { accessToken } = this;
  const res = await fetch(`${API_URL}/user/fetchUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) throw new Error("Error fetching customers data");
  return await res.json();
}

export async function updateCustomer() {
  const { accessToken } = this;
  const res = await fetch(`${API_URL}/update-status?`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) throw new Error("Error fetching customers data");
  return await res.json();
}
