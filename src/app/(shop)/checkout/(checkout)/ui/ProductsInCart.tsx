"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/store";
import { currencyFormat } from '../../../../../utils/currencyFormat';

export const ProductsInCart = () => {


  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
            <span>
                {product.size} - {product.title} ({product.quantity})
            </span>
            <p className="font-bold">{currencyFormat(product.price * product.quantity)}</p>

          </div>
        </div>
      ))}
    </>
  );
};
