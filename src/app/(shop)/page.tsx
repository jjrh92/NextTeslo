import React from 'react';
import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed';

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title='Tienda' subtitle='Todos los productos' className='mb-2' />
      <ProductGrid products={products} />
    </>
  );
}
