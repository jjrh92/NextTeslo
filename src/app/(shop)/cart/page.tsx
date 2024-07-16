import Link from 'next/link';
import { Title } from '../../../components/ui/title/Title';
import { initialData } from '@/seed';
import Image from 'next/image';
import { QuantitySelector } from '../../../components/product/quantity-selector/QuantitySelector';
import { redirect } from 'next/navigation';

const productsInCart = [
  initialData.products[1],
  initialData.products[3],
  initialData.products[7],
];


// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function() {

  // redirect("/empty/");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title='Carrito' />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

        {/* Carrito */}
        <div className='flex flex-col mt-5'>
          <span className='text-xl'>Agregar más items</span>
          <Link href="/" className='underline mb-5'>
            Continúa comprando
          </Link>

          {/* Items */}

          {
            productsInCart.map(product => (

              <div key={product.slug} className='flex'>
                <Image src={`/products/${product.images[0]}`} alt='Product in cart' width={100} height={100} className='mr-5 rounded' style={{width: "100px", height: "100px"}}/>

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3}/>
                  <button className='underline mt-3'>
                    Remover
                  </button>
                </div>

              </div>
              
            ))
          }

        </div>

        {/* Checkout - Resumen de orden */}
        <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
          <h2 className='text-2xl mb-2'>Resumen de orden</h2>

          <div className='grid grid-cols-2'>
            <span>No. Productos</span>
            <span className='text-right'>3 Articulos</span>

            <span>Subtotal</span>
            <span className='text-right'>$ 100</span>

            <span>Impuestos (15%)</span>
            <span className='text-right'>$ 100</span>

            <span className='mt-5 text-2xl'>Total:</span>
            <span className='mt-5 text-2xl text-right'>$ 100</span>

          </div>

          <div className='mt-5 mb-2 w-full'>
            <Link className='flex btn-primary justify-center' href="/checkout/address">Checkout</Link>
          </div>

        </div>

        </div>
      </div>

    </div>
  );
}