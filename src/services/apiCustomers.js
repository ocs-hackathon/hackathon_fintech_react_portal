export async function getCustomers() {
  const { acessToken } = this;
  const res = await fetch(`/fetchUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Acess-Token": `Bearer ${acessToken}`,
    },
  });

  if (!res.ok) throw new Error("Error fetching customers data");
  return await res.json();
}

export async function updateCustomer() {
  const { acessToken } = this;
  const res = await fetch(`/update-status?`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Acess-Token": `Bearer ${acessToken}`,
    },
  });

  if (!res.ok) throw new Error("Error fetching customers data");
  return await res.json();
}


