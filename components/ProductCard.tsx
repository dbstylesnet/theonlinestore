'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image || '/placeholder.png'}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <button onClick={handleAddToCart} className={styles.addButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
