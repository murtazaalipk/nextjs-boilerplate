// /utils/api.js
export const apiRequest = async ({ url, method = 'GET', body = null, headers = {} }) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return await response.json();
};
