import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context" 
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  //capture de index of array 
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if( index==='last') index = context.order?.length - 1
  const lastestOrderProducts = context?.order[index]?.products || [];
  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 ">
        <Link to ="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className='h-5 w-5 cursor-pointer text-black hover:text-orange-600' />
          </Link>

          <h1>My Order</h1>
        </div>

        <div className="flex flex-col w-80 pt-20 ">
                {
                   lastestOrderProducts.map(product=>(
                    <OrderCard 
                    title={product.title}
                     imageUrl = {product.images?.[0]} 
                     price = {product.price} 
                     id={product.id}
                     key={product.id} />
                   )) 
                }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder