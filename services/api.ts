import { Product, Category } from '@/types';

const API_BASE_URL = 'https://fakestoreapi.com';

class ApiService {
  private async fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return response.json();
  }

  async getCategories(): Promise<string[]> {
    try {
      return await this.fetchData<string[]>('/products/categories');
    } catch (err) {
      // During CI/build the external API may be unreachable; don't fail the build.
      // Frontend can still render (with empty state) and fetch again later if needed.
      console.error('getCategories failed:', err);
      return [];
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      return await this.fetchData<Product[]>('/products');
    } catch (err) {
      console.error('getProducts failed:', err);
      return [];
    }
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      return await this.fetchData<Product[]>(`/products/category/${category}`);
    } catch (err) {
      console.error('getProductsByCategory failed:', err);
      return [];
    }
  }

  async getProduct(id: number): Promise<Product> {
    // If you add a product detail page later, consider applying the same "don't fail build"
    // strategy there too.
    return this.fetchData<Product>(`/products/${id}`);
  }
}

export const apiService = new ApiService();
