import { z } from "zod";

/**
 * Common API Response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: Record<string, string>;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * API Error
 */
export class HttpError extends Error {
  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.name = "HttpError";
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: Record<string, string>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Authentication Types
 */
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginCredentials = z.infer<typeof loginSchema>;

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

/**
 * Inventory Types (example - customize based on your needs)
 */
export interface Product {
  id: string;
  name: string;
  description?: string;
  sku: string;
  price: number;
  quantity: number;
  category?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductInput {
  name: string;
  description?: string;
  sku: string;
  price: number;
  quantity: number;
  category?: string;
  imageUrl?: string;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}
