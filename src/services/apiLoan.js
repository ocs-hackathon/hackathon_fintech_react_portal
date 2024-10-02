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

export async function createLoanOffer({ data: offer, accessToken }) {
  console.log(offer);
  console.log("accessTok:", accessToken);
  const res = await fetch(`${API_URL}/offerr/createOffer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(offer),
  });
  console.log(res);
  if (!res.ok) throw new Error("Loan offer couldn't be created.");
  const data = await res.json();
  console.log(data);
  return data;
}
