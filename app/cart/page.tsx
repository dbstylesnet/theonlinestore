'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import styles from './page.module.css';

export default function CartPage() {
  const { cartItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h1 className={styles.emptyTitle}>Your cart is empty</h1>
          <p className={styles.emptyText}>Start shopping to add items to your cart!</p>
          <Link href="/" className={styles.shopButton}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.content}>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Total Items:</span>
            <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Total Price:</span>
            <span className={styles.totalPrice}>${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
