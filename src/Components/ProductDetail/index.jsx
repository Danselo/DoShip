import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
const ProductDetail = () => {
    return(
        <aside className="flex flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-68">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 ' />
                </div>
            </div>
        </aside>
    )
}
export default ProductDetail