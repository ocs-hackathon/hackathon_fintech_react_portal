export async function getAllOffers() {
  const { acessToken } = this;
  const res = await fetch(``, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Acess-Token": `Bearer ${acessToken}`,
    },
  });
  if (!res.ok) throw new Error("Error while fetching loan offers");
  return await res.json();
}

export async function createLoanOffer(offer, acessToken) {
  const res = await fetch(``, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Acess-Token": `Bearer ${acessToken}`,
    },
    body: JSON.stringify(offer),
  });
  if (!res.ok) throw new Error("Loan offer couldn't be created.");
  return await res.json();
}
