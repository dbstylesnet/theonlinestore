import React from 'react';
import Link from 'next/link';
import { apiService } from '@/services/api';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const category = decodeURIComponent(categoryParam);
  const products = await apiService.getProductsByCategory(category);

  const formattedCategory = category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Categories
      </Link>
      <div className={styles.header}>
        <h1 className={styles.title}>{formattedCategory}</h1>
        <p className={styles.count}>{products.length} product{products.length !== 1 ? 's' : ''}</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
