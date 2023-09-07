import { useContext } from "react"
import { ShoppingCartContext } from "../../Context" 
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const lastestOrderProducts = context.order?.slice(-1)[0]?.products || [];
  console.log(lastestOrderProducts);
    return (
      <Layout>
        MyOrder
        <div className="flex flex-col w-80 pt-20">
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