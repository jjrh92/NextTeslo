"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";
import Link from "next/link";

export const ProductsInCart = () => {

    const updateProductQuantity = useCartStore(state => state.updateProductquantity);

    const removeProduct = useCartStore(state => state.removeProduct);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex">
          <Image
            src={`/products/${product.image}`}
            alt="Product in cart"
            width={100}
            height={100}
            className="mr-5 rounded"
            style={{ width: "100px", height: "100px" }}
          />

          <div>
            <Link className="hover:underline cursor-pointer" href={`/product/${product.slug}`}>
                {product.size} - {product.title}
            </Link>

            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={quantity => updateProductQuantity(product, quantity)}
            />
            <button onClick={() => removeProduct(product)} className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};