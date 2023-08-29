import './style.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/solid'
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.showProductDetail);
    return(
        <aside 
        className ={`${context.isOpenProductDetail ? 'flex' : 'hidden'}  flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-68`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 cursor-pointer hover:text-orange-600' onClick={context.closeProductDetail} />
                </div>
            </div>
            <figure className='px-6'>
                <img
                className='w-full h-full rounded-lg'
                src={context.showProductDetail.images[0]} 
                alt={context.showProductDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-medium mb-2'>${context.showProductDetail.price}</span>
                <span className='text-lg font-medium'>{context.showProductDetail.title}</span>
                <span className='text-sm font-light'>${context.showProductDetail.description}</span>

            </p>
        </aside>
    )
}
export default ProductDetail