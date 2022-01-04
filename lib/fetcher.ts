export default async function fetcher<JSON = any>(url: RequestInfo, options?: RequestInit): Promise<JSON> {
  const response = await fetch(url, options);
  return response.json();
}
