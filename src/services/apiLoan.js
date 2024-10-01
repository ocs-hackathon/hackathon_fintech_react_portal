import { API_URL } from "./config";

export async function getAllOffers() {
  const { accessToken } = this;
  const res = await fetch(`${API_URL}/offer/getOffers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) throw new Error("Error while fetching loan offers");
  return await res.json();
}

export async function createLoanOffer(offer, acessToken) {
  const res = await fetch(`${API_URL}/offer/createOffer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${acessToken}`,
    },
    body: JSON.stringify(offer),
  });
  if (!res.ok) throw new Error("Loan offer couldn't be created.");
  return await res.json();
}
