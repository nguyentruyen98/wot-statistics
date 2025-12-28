import { apiClient, TokenManager } from "../client";
import { AuthResponse, LoginCredentials, loginSchema, User } from "../types";

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * Login with email and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Validate credentials
    const validatedCredentials = loginSchema.parse(credentials);

    const response = await apiClient.post<AuthResponse, LoginCredentials>(
      "/auth/login",
      validatedCredentials
    );

    // Store tokens
    TokenManager.setAccessToken(response.tokens.accessToken);
    TokenManager.setRefreshToken(response.tokens.refreshToken);

    // Store user data
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  }

  /**
   * Register a new user
   */
  async register(data: {
    email: string;
    password: string;
    name: string;
  }): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>("/auth/register", data);

    // Store tokens
    TokenManager.setAccessToken(response.tokens.accessToken);
    TokenManager.setRefreshToken(response.tokens.refreshToken);

    // Store user data
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  }

  /**
   * Logout the current user
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      // Clear tokens and user data regardless of API response
      TokenManager.clearTokens();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<User> {
    return await apiClient.get<User>("/auth/me");
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<void> {
    await apiClient.post("/auth/forgot-password", { email });
  }

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    await apiClient.post("/auth/reset-password", {
      token,
      password: newPassword,
    });
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return TokenManager.getAccessToken() !== null;
  }

  /**
   * Get stored user data
   */
  getStoredUser(): User | null {
    if (typeof window !== "undefined") {
      const userJson = localStorage.getItem("user");
      return userJson ? JSON.parse(userJson) : null;
    }
    return null;
  }
}

// Export singleton instance
export const authService = new AuthService();
