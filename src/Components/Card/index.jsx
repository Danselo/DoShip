import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusSmallIcon,CheckIcon} from "@heroicons/react/24/outline";


const Card = (data)=>{
    //call the context 
    const context = useContext(ShoppingCartContext)
    //call detail of card
    const productDetailShow = (productDetail) => {
        context.openProductDetail()
        context.setShowProductDetail(productDetail)
        context.closeShoppingSideMenu()
    }
    const addProductCar = (event,productData) => {
        event.stopPropagation()
        context.setAddProductToCar([...context.addProductToCar, productData]);
        context.setCount(context.count + 1)
        context.closeProductDetail()
        context.openShoppingSideMenu()

    }
    const renderIcon= (id) => {
        const isInCart = context.addProductToCar.filter(product => product.id === id ).length > 0
        if(isInCart){
            return(
                <div className="absolute top-0 right-0 bg-black rounded-full flex w-6 h-6 justify-center items-center m-2 p-1">
                        <CheckIcon className="h-full text-white"/>
                    </div>
            )
        }else{
            return(
                <div onClick={(event)=> addProductCar(event,data.data)} className="absolute top-0 right-0 bg-white rounded-full flex w-6 h-6 justify-center items-center m-2 p-1 hover:bg-yellow-600">
                        <PlusSmallIcon className="h-full"/>
                </div>
            )
        }
        
    }
    return(
        <div
        className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-sm"
        onClick={() => productDetailShow(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-yellow-600 text-xs m-2 px-3 py-0.5 rounded-lg text-black/80">
                    {data.data.category.name}
                </span>
                <img className = "w-full h-full object-cover rounded-lg" src={data.data.images?.[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between m-2 items-center">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card