import { XMarkIcon } from '@heroicons/react/24/solid'
import { render } from 'react-dom'

const OrderCard = props => {
    const {id,title,price,imageUrl,handleDelete} = props
    let renderXMarkIcon
    if(handleDelete){
        <XMarkIcon className='h-5 w-5 cursor-pointer text-black hover:text-orange-600' onClick={()=> handleDelete(id)} />
    }
    return (
        <div className='flex  justify-between items-center'>
            <div className='flex justify-center gap-2 mb-3'>
                <figure className='w-20 h-20'>
                    <img src={imageUrl} alt={title} className='w-full h-full rounded-lg object-cover' />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex justify-center gap-2'>
                <p className='text-lg font-medium'>
                    ${price}
                    {renderXMarkIcon}
                </p>
            </div>
        </div>
    )
}
export default OrderCard