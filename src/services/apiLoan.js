import { API_URL } from "./config";

/**
 * Fetches all loan offers from the API.
 *
 * @async
 * @function getAllOffers
 * @returns {Promise<Object>} A promise that resolves to the JSON response containing the loan offers.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *
 * @example
 * try {
 *   const offers = await getAllOffers();
 *   console.log(offers);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

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
  // const data = await res.json();
  // if (!Array.isArray(data)) throw new Error("Access denied");
  return await res.json();
}

/**
 * Creates a new loan offer.
 *
 * @async
 * @function createLoanOffer
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.data - The loan offer data to be created.
 * @param {string} params.accessToken - The access token for authorization.
 * @returns {Promise<Object>} A promise that resolves to the JSON response containing the created loan offer data.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *
 * @example
 * try {
 *   const offerData = {
 *     amount: 5000,
 *     interestRate: 5,
 *     duration: 12,
 *     // additional offer fields...
 *   };
 *   const response = await createLoanOffer({ data: offerData, accessToken: 'your_access_token' });
 *   console.log(response);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

export async function createLoanOffer({ data: offer, accessToken }) {
  const res = await fetch(`${API_URL}/offer/createOffer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(offer),
  });
  if (!res.ok) throw new Error("Loan offer couldn't be created.");
  const data = await res.json();
  return data;
}
