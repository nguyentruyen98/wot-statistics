/**
 * API Client Configuration
 */
export const API_CONFIG = {
  // Base URL for API requests - can be overridden via environment variable
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",

  // Request timeout in milliseconds
  timeout: 30000,

  // Retry configuration
  retry: {
    maxRetries: 3,
    retryDelay: 1000,
    retryableStatusCodes: [408, 429, 500, 502, 503, 504],
  },

  // Headers
  headers: {
    "Content-Type": "application/json",
  },
} as const;

/**
 * Storage keys for tokens and user data
 */
export const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user",
} as const;
