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

export async function updateCustomer(args) {
  const { status, id, accessToken } = args;
  console.log(status);
  const res = await fetch(`${API_URL}/auth/update-status/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ message: status }),
  });
  console.log(res);
  if (!res.ok) throw new Error("Error trying to update customer status!");
  return await res.json();
}

export async function blockCustomer(args) {
  const { id, accessToken } = args;
  const res = await fetch(`${API_URL}/user/blockUser/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) throw new Error("Error while trying to block user.");
  return await res.json();
}
