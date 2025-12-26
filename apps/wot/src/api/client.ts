import { ApiClient } from "@workspace/api-client/client";

export const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const internalApiClient = new ApiClient({
  baseURL: "/",
});
