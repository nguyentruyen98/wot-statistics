import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import { API_CONFIG, STORAGE_KEYS } from "./config";
import { DEFAULT_ERROR_MESSAGE } from "./constants/error";
import { ApiError, ApiResponse, HttpError } from "./types";

/**
 * Token management utilities
 */
export class TokenManager {
  // private static getStorageKey(key: string): string {
  //   return `${STORAGE_KEYS.ACCESS_TOKEN}_${key}`;
  // }
  // static setAccessToken(token: string): void {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  //   }
  // }
  // static getAccessToken(): string | null {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  //   }
  //   return null;
  // }
  // static setRefreshToken(token: string): void {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  //   }
  // }
  // static getRefreshToken(): string | null {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  //   }
  //   return null;
  // }
  // static clearTokens(): void {
  //   if (typeof window !== "undefined") {
  //     localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  //     localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  //     localStorage.removeItem(STORAGE_KEYS.USER);
  //   }
  // }
}

/**
 * API Client class with axios
 */
export class ApiClient {
  private client: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
  }> = [];

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: API_CONFIG.baseURL,
      timeout: API_CONFIG.timeout,
      headers: API_CONFIG.headers,
      ...config,
    });

    this.setupInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors(): void {
    // Response interceptor - handle errors
    this.client.interceptors.response.use(
      response => response,
      async (error: AxiosError<ApiResponse>) => {
        // const originalRequest = error.config as InternalAxiosRequestConfig & {
        //   _retry?: boolean;
        // };

        // // Handle 401 Unauthorized - token refresh
        // if (error.response?.status === 401 && !originalRequest._retry) {
        //   if (this.isRefreshing) {
        //     return new Promise((resolve, reject) => {
        //       this.failedQueue.push({ resolve, reject });
        //     })
        //       .then(() => this.client(originalRequest))
        //       .catch(err => Promise.reject(err));
        //   }

        //   originalRequest._retry = true;
        //   this.isRefreshing = true;
        // }

        return Promise.reject(this.handleError(error));
      }
    );
  }

  /**
   * Handle and format API errors
   */
  private handleError(error: AxiosError<ApiResponse>): ApiError {
    if (error.response) {
      const { status, data } = error.response;
      return new ApiError(
        data.message || "An error occurred",
        status,
        data.error
      );
    } else if (error.request) {
      return new ApiError("No response received from server", 0);
    } else {
      return new ApiError(error.message || "Request failed", 0);
    }
  }

  /**
   * Generic GET request
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get(url, config);
    // Handle both wrapped {data: T} and direct T responses
    return (response.data?.data ?? response.data) as T;
  }

  /**
   * Generic POST request
   */
  async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post(url, data, config);
    // Handle both wrapped {data: T} and direct T responses
    return (response.data?.data ?? response.data) as T;
  }

  /**
   * Generic PUT request
   */
  async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put(url, data, config);
    // Handle both wrapped {data: T} and direct T responses
    return (response.data?.data ?? response.data) as T;
  }

  /**
   * Generic PATCH request
   */
  async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.patch(url, data, config);
    // Handle both wrapped {data: T} and direct T responses
    return (response.data?.data ?? response.data) as T;
  }

  /**
   * Generic DELETE request
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete(url, config);
    // Handle both wrapped {data: T} and direct T responses
    return (response.data?.data ?? response.data) as T;
  }

  /**
   * Get the underlying axios instance
   */
  getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}
