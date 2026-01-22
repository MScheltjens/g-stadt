import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge class names conditionally
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//
export function capitalizeWords(label: string) {
  return label.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}
