import { CalendarIcon, ShoppingBagIcon,BanknotesIcon,ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const {totalProducts,totalPrice} = props

    return (
        <div className='flex  justify-between items-center border border-gray-500 p-3 mt-2 gap-5 rounded-lg bg-neutral-200 hover:bg-orange-200 hover:transition-colors w-80 '>
            <div>
                <div className="flex gap-1">
                <CalendarIcon className='h-5 w-5 cursor-pointer  ' />
                <span className="font-light">08/09/2023</span>
                </div>
                <div className="flex gap-1">
                <ShoppingBagIcon className='h-5 w-5 cursor-pointer ' />
                    <span className="font-light">{totalProducts} Products</span>
                </div>
            </div>
            <div className="flex gap-1 justify-center items-center">
            <BanknotesIcon className='h-5 w-5 cursor-pointer  ' />
            <span className="text-2xl font-semibold">${totalPrice}</span>
            <ChevronRightIcon className='h-5 w-5 cursor-pointer' />

            </div>
        </div>
    )
}
export default OrdersCard