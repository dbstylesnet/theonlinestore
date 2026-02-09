import React from 'react';
import Link from 'next/link';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  category: string;
}

const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('electronics') || categoryLower.includes('electronic')) {
    return (
      <svg
        className={styles.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    );
  }
  
  if (categoryLower.includes('jewel') || categoryLower.includes('jewelry')) {
    return (
      <svg
        className={styles.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="M21 12h-6m-6 0H3"></path>
        <path d="M18.364 5.636l-4.243 4.243m0 4.242l4.243 4.243"></path>
        <path d="M5.636 5.636l4.243 4.243m0 4.242l-4.243 4.243"></path>
      </svg>
    );
  }
  
  if (categoryLower.includes('men') || categoryLower.includes("men's")) {
    return (
      <svg
        className={styles.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    );
  }
  
  if (categoryLower.includes('women') || categoryLower.includes("women's")) {
    return (
      <svg
        className={styles.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M12 11v6"></path>
        <path d="M9 14h6"></path>
      </svg>
    );
  }
  
  // Default icon (shopping bag)
  return (
    <svg
      className={styles.icon}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const formattedCategory = category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Link href={`/category/${encodeURIComponent(category)}`} className={styles.card}>
      <div className={styles.content}>
        {getCategoryIcon(category)}
        <h2 className={styles.title}>{formattedCategory}</h2>
      </div>
    </Link>
  );
}
