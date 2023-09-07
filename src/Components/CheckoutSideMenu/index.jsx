import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context" 
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCard"
import { totalProducts } from "../../utils"
const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    const handleDelete = (id)=>{
        const filteredProducts = context.addProductToCar.filter(product => product.id != id)
        context.setAddProductToCar(filteredProducts)
    }
    const addOrder = ()=>{
        if(context.addProductToCar.length > 0){
            const newOrder = {
                data: '06.09.2023',
                products: context.addProductToCar,
                totalProducts: context.addProductToCar.length,
                TotalPrice: totalProducts(context.addProductToCar)
            }
            context.setOrder([...context.order, newOrder]);
            context.setAddProductToCar([])
            context.closeShoppingSideMenu()
        }
        
    }
    return(
        <aside 
        className ={`${context.isOpenShoppingSideMenu ? 'flex' : 'hidden'}  flex-col fixed bg-white top-20 right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-68`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 cursor-pointer hover:text-orange-600' onClick={context.closeShoppingSideMenu} />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                   context.addProductToCar.map(product=>(
                    <OrderCard title={product.title} imageUrl = {product.images?.[0]} price = {product.price} handleDelete = {handleDelete} id={product.id}key={product.id} />
                   )) 
                }
            </div>
            <div className="px-6 mb-6 ">
                <p className="flex justify-between items-center mb-3">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalProducts(context.addProductToCar)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className="w-full py-3 bg-black text-white rounded-lg" onClick={addOrder}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}
export default CheckoutSideMenu