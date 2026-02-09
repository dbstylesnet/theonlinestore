import React from 'react';
import { apiService } from '@/services/api';
import CategoryCard from '@/components/CategoryCard';
import styles from './page.module.css';

export default async function HomePage() {
  const categories = await apiService.getCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop by Category</h1>
      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
