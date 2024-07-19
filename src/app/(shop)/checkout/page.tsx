import Link from 'next/link';
import { Title } from '../../../components/ui/title/Title';
import { initialData } from "@/seed/seed";
import Image from 'next/image';

const productsInCart = [
  initialData.products[1],
  initialData.products[3],
  initialData.products[7],
];


// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title='Verificar Orden' />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

        {/* Carrito */}
        <div className='flex flex-col mt-5'>
          <span className='text-xl'>Ajustar elementos</span>
          <Link href="/cart" className='underline mb-5'>
            Editar Carrito
          </Link>

          {/* Items */}

          {
            productsInCart.map(product => (

              <div key={product.slug} className='flex'>
                <Image src={`/products/${product.images[0]}`} alt='Product in cart' width={100} height={100} className='mr-5 rounded' style={{width: "100px", height: "100px"}}/>

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className='font-bold'>Subtotal: ${product.price * 3}</p>
                  <button className='underline mt-3'>
                    Remover
                  </button>
                </div>

              </div>
              
            ))
          }

        </div>

        {/* Checkout - Resumen de orden */}
        <div className='bg-white rounded-xl shadow-xl p-7'>
          <h2 className='text-2xl mb-2 font-bold'>Direccion de entrega: </h2>
          <div className='mb-10'>
            <p className='text-xl'>Julio Reyes</p>
            <p>Av. Generalisimo Francisco de Miranda</p>
            <p>Maracay</p>
            <p>Estado Aragua</p>
            <p>Venezuela</p>
          </div>
          {/* Divider */}
          <div className='w-full h-0.5 rounded bg-gray-200 mb-10'>

          </div>
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

            <p className='mb-5'>
              {/* Disclaimer */}
              <span className='text-xs'>
                Al hacer click en Proceder con la Orden, aceptas nuestros <a className='underline' href="#">terminos y condiciones</a> y <a className='underline' href="#">politica de privacidad</a>
              </span>
            </p>

            <Link className='flex btn-primary justify-center' href="/orders/123">Proceder con la Orden</Link>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}