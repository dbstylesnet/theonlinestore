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
    return this.fetchData<string[]>('/products/categories');
  }

  async getProducts(): Promise<Product[]> {
    return this.fetchData<Product[]>('/products');
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.fetchData<Product[]>(`/products/category/${category}`);
  }

  async getProduct(id: number): Promise<Product> {
    return this.fetchData<Product>(`/products/${id}`);
  }
}

export const apiService = new ApiService();
