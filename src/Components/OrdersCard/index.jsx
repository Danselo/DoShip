import { CalendarIcon, ShoppingBagIcon,BanknotesIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
    const {totalProducts,totalPrice} = props

    return (
        <div className='flex  justify-between items-center border border-gray-500 p-3 mt-2 gap-5 rounded-lg bg-neutral-200 hover:bg-orange-200 hover:transition-colors'>
            <div className="flex gap-1">
            <CalendarIcon className='h-5 w-5 cursor-pointer  ' />
             08/09/2023
            </div>
            <div className="flex gap-1">
            <ShoppingBagIcon className='h-5 w-5 cursor-pointer ' />
                {totalProducts} Products
            </div>
            <div className="flex gap-1">
            <BanknotesIcon className='h-5 w-5 cursor-pointer  ' />
                ${totalPrice}
            </div>
        </div>
    )
}
export default OrdersCard