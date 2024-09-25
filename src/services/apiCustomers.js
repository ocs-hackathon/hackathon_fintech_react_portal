export async function getCustomers() {
  const { acessToken } = this;
  const res = await fetch(``, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Acess-Token": `Bearer ${acessToken}`,
    },
  });

  if (!res.ok) throw new Error("Error fetching customers data");
  return await res.json();
}
