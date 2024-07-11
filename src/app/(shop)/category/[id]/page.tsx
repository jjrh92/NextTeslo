/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import { initialData } from "@/seed";
import { Title } from "@/components";
import { ProductGrid } from "@/components";
import { Category } from '../../../../interfaces/product.interface';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;

  }
}

export default function({params}: Props) {

  const { id } = params;
  const products = seedProducts.filter(product => product.gender === id);
  const labels: Record<Category, string> = {
    "men" : "para hombres",
    "women" : "para mujeres",
    "kid" : "para niños",
    "unisex" : "para todos",
  }

  return (
    <>
      <Title title={`Articulos ${labels[id]}`} subtitle={`Teslo ${labels[id]}`} className='mb-2' />
      <ProductGrid products={products} />
    </>
  );
}