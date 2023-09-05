import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {id,title,price,imageUrl,handleDelete} = props
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
                </p>
                <XMarkIcon className='h-5 w-5 cursor-pointer text-black hover:text-orange-600' onClick={()=> handleDelete(id)} />
            </div>
        </div>
    )
}
export default OrderCard