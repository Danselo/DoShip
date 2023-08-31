import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCard"
const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    return(
        <aside 
        className ={`${context.isOpenShoppingSideMenu ? 'flex' : 'hidden'}  flex-col fixed bg-white top-20 right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-68`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 cursor-pointer hover:text-orange-600' onClick={context.closeShoppingSideMenu} />
                </div>
            </div>
            <div className="px-6">
                {
                   context.addProductToCar.map(product=>(
                    <OrderCard title={product.title} imageUrl = {product.images?.[0]} price = {product.price}/>
                   )) 
                }
            </div>
        </aside>
    )
}
export default CheckoutSideMenu