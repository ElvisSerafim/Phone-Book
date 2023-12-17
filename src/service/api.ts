const BASE_URL =
  process.env.NEXT_PUBLIC_HOST || "http://localhost:8080/contacts";

export const apiFetch = async (
  endpoint: string,
  method: string = "GET",
  body?: any
) => {
  const url = `${BASE_URL}/${endpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
