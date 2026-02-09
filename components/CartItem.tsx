'use client';

import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/contexts/CartContext';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image || '/placeholder.png'}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 100px"
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
      <div className={styles.controls}>
        <div className={styles.quantityControls}>
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className={styles.quantityButton}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className={styles.quantityButton}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <p className={styles.totalPrice}>
          ${(product.price * quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className={styles.removeButton}
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
