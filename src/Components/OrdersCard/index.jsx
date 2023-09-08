
const OrdersCard = props => {
    const {totalProducts,totalPrice} = props

    return (
        <div className='flex  justify-between items-center'>
            <span>08.09.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </div>
    )
}
export default OrdersCard