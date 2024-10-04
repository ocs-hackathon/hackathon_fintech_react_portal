import { API_URL } from "./config";

/**
 * Fetches the list of customers from the API.
 *
 * @async
 * @function getCustomers
 * @returns {Promise<Object>} A promise that resolves to the JSON response containing customer data.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *
 * @example
 * try {
 *   const customers = await getCustomers();
 *   console.log(customers);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

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

/**
 * Updates the status of a customer.
 *
 * @async
 * @function updateCustomer
 * @param {Object} args - The arguments for the function.
 * @param {string} args.status - The new status to set for the customer.
 * @param {string} args.id - The unique identifier of the customer to update.
 * @param {string} args.accessToken - The access token for authorization.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the update request.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *
 * @example
 * try {
 *   const response = await updateCustomer({ status: 'active', id: '123', accessToken: 'your_access_token' });
 *   console.log(response);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
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


/**
 * Blocks a customer by their ID.
 *
 * @async
 * @function blockCustomer
 * @param {Object} args - The arguments for the function.
 * @param {string} args.id - The unique identifier of the customer to block.
 * @param {string} args.accessToken - The access token for authorization.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the block request.
 * @throws {Error} Throws an error if the fetch request fails or the response is not ok.
 *
 * @example
 * try {
 *   const response = await blockCustomer({ id: '123', accessToken: 'your_access_token' });
 *   console.log(response);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

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
