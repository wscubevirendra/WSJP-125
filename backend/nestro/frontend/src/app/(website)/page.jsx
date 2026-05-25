import Hero from '@/components/website/Hero';
import ProductCard from '@/components/website/ProductCard';
import React from 'react'


export const metadata = {
  title: "Nestro — Curated Furniture",
  description: "Nestro — Curated Furniture Description",
};

export default function page() {
  return (
    <>

      <Hero />
      <ProductCard />
    </>
  )
}
