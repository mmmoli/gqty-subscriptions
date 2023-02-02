import { QueryFetcher } from "gqty";
import { endpoint } from "./config";

export const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions
) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  //   const isAuthenticated = nhost.auth.isAuthenticated();

  //   if (isAuthenticated) {
  //     headers.append(
  //       "Authorization",
  //       `Bearer ${nhost.auth.getSession()?.accessToken}`
  //     );
  //   }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  return response.json();
};
