import { createSubscriptionsClient } from "@gqty/subscriptions";
import { endpoint } from "./config";

export const subscriptionsClient =
  typeof window !== "undefined"
    ? createSubscriptionsClient({
        wsEndpoint: () => {
          const url = new URL(endpoint);
          url.protocol = url.protocol.replace("http", "ws");
          return url.href;
        },
      })
    : undefined;

const { setConnectionParams } = subscriptionsClient || {};

if (setConnectionParams) {
  const resetWebsocketConnection = true;
  setConnectionParams(() => {
    const params = {} as Record<string, unknown>;
    // We use this in HTCH…
    // const isAuthenticated = nhost.auth.isAuthenticated();
    // if (isAuthenticated) {
    //   params["headers"] = {
    //     Authorization: `Bearer ${nhost.auth.getSession()?.accessToken}`,
    //   };
    // }
    return params;
  }, resetWebsocketConnection);
}
