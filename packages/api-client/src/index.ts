/**
 * API Client Package
 *
 * This package provides a type-safe axios-based API client
 * for the inventory system application.
 */

// Export the main client and token manager
export { apiClient, ApiClient, TokenManager } from "./client";

// Export configuration
export { API_CONFIG, STORAGE_KEYS } from "./config";

// Export types
export type {
  ApiResponse,
  ApiError,
  PaginationParams,
  PaginatedResponse,
  LoginCredentials,
  AuthTokens,
  User,
  AuthResponse,
  Product,
  CreateProductInput,
  UpdateProductInput,
} from "./types";

export { loginSchema } from "./types";

// Export services
export { authService, AuthService } from "./services/auth.service";
export { productsService, ProductsService } from "./services/products.service";
