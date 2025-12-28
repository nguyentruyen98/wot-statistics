import { apiClient } from "../client";
import {
  CreateProductInput,
  PaginatedResponse,
  PaginationParams,
  Product,
  UpdateProductInput,
} from "../types";

/**
 * Products Service
 */
export class ProductsService {
  private readonly baseUrl = "/products";

  /**
   * Get all products with pagination
   */
  async getProducts(
    params?: PaginationParams
  ): Promise<PaginatedResponse<Product>> {
    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());
    if (params?.sortBy) queryParams.append("sortBy", params.sortBy);
    if (params?.sortOrder) queryParams.append("sortOrder", params.sortOrder);

    const url = `${this.baseUrl}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    return await apiClient.get<PaginatedResponse<Product>>(url);
  }

  /**
   * Get a single product by ID
   */
  async getProduct(id: string): Promise<Product> {
    return await apiClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new product
   */
  async createProduct(data: CreateProductInput): Promise<Product> {
    return await apiClient.post<Product, CreateProductInput>(
      this.baseUrl,
      data
    );
  }

  /**
   * Update an existing product
   */
  async updateProduct(
    id: string,
    data: Partial<CreateProductInput>
  ): Promise<Product> {
    return await apiClient.put<Product, Partial<CreateProductInput>>(
      `${this.baseUrl}/${id}`,
      data
    );
  }

  /**
   * Delete a product
   */
  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`${this.baseUrl}/${id}`);
  }

  /**
   * Search products
   */
  async searchProducts(
    query: string,
    params?: PaginationParams
  ): Promise<PaginatedResponse<Product>> {
    const queryParams = new URLSearchParams({ q: query });

    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());

    return await apiClient.get<PaginatedResponse<Product>>(
      `${this.baseUrl}/search?${queryParams.toString()}`
    );
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(
    category: string,
    params?: PaginationParams
  ): Promise<PaginatedResponse<Product>> {
    const queryParams = new URLSearchParams();

    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());

    const url = `${this.baseUrl}/category/${category}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    return await apiClient.get<PaginatedResponse<Product>>(url);
  }

  /**
   * Update product quantity
   */
  async updateQuantity(id: string, quantity: number): Promise<Product> {
    return await apiClient.patch<Product, { quantity: number }>(
      `${this.baseUrl}/${id}/quantity`,
      { quantity }
    );
  }
}

// Export singleton instance
export const productsService = new ProductsService();
