# @workspace/api-client

A type-safe axios-based API client for the inventory system application.

## Features

- 🚀 Built with TypeScript and Axios
- 🔐 Automatic token management and refresh
- 🎯 Type-safe API calls with Zod validation
- 🔄 Request/Response interceptors
- ⚡ Error handling with custom ApiError class
- 📦 Modular service architecture
- 🎨 Environment-based configuration

## Installation

This package is part of the monorepo and automatically linked via workspace protocol.

```bash
pnpm add @workspace/api-client
```

## Configuration

Create a `.env.local` file in your app:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Usage

### Basic Usage

```typescript
import { apiClient } from "@workspace/api-client/client";

// GET request
const data = await apiClient.get<User>("/users/me");

// POST request
const newUser = await apiClient.post<User, CreateUserInput>("/users", {
  name: "John Doe",
  email: "john@example.com",
});
```

### Authentication Service

```typescript
import { authService } from "@workspace/api-client/services/auth.service";

// Login
const response = await authService.login({
  email: "user@example.com",
  password: "password123",
});

// Check authentication status
if (authService.isAuthenticated()) {
  console.log("User is authenticated");
}

// Logout
await authService.logout();
```

### Products Service

```typescript
import { productsService } from "@workspace/api-client/services/products.service";

// Get all products with pagination
const products = await productsService.getProducts({
  page: 1,
  limit: 10,
  sortBy: "name",
  sortOrder: "asc",
});

// Get single product
const product = await productsService.getProduct("product-id");

// Create product
const newProduct = await productsService.createProduct({
  name: "New Product",
  sku: "SKU-001",
  price: 99.99,
  quantity: 100,
});

// Update product
const updated = await productsService.updateProduct("product-id", {
  price: 89.99,
});

// Delete product
await productsService.deleteProduct("product-id");

// Search products
const searchResults = await productsService.searchProducts("laptop");
```

### Token Management

```typescript
import { TokenManager } from "@workspace/api-client/client";

// Manually manage tokens if needed
TokenManager.setAccessToken("token-value");
const token = TokenManager.getAccessToken();
TokenManager.clearTokens();
```

### Error Handling

```typescript
import { ApiError } from "@workspace/api-client/types";

try {
  const data = await apiClient.get("/some-endpoint");
} catch (error) {
  if (error instanceof ApiError) {
    console.error("Status:", error.statusCode);
    console.error("Message:", error.message);
    console.error("Validation errors:", error.errors);
  }
}
```

## Creating Custom Services

```typescript
import { apiClient } from "@workspace/api-client/client";
import {
  PaginatedResponse,
  PaginationParams,
} from "@workspace/api-client/types";

interface Category {
  id: string;
  name: string;
}

export class CategoriesService {
  private readonly baseUrl = "/categories";

  async getCategories(
    params?: PaginationParams
  ): Promise<PaginatedResponse<Category>> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append("page", params.page.toString());
    if (params?.limit) queryParams.append("limit", params.limit.toString());

    const url = `${this.baseUrl}?${queryParams.toString()}`;
    return await apiClient.get<PaginatedResponse<Category>>(url);
  }

  async getCategory(id: string): Promise<Category> {
    return await apiClient.get<Category>(`${this.baseUrl}/${id}`);
  }
}

export const categoriesService = new CategoriesService();
```

## API Response Format

All API endpoints should follow this response format:

```typescript
{
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
```

## Features in Detail

### Automatic Token Refresh

The client automatically handles token refresh when a 401 response is received. Failed requests are queued and retried after the token is refreshed.

### Request Interceptors

- Automatically adds Authorization header with Bearer token
- Handles token refresh logic

### Response Interceptors

- Handles 401 errors with automatic token refresh
- Formats error responses consistently
- Redirects to login on authentication failure

## TypeScript Support

Full TypeScript support with:

- Generic type parameters for requests/responses
- Zod schema validation
- Type-safe service methods
- Comprehensive type definitions

## License

MIT
