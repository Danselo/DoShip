import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon} from "@heroicons/react/24/outline";

const ShoppingCart = () =>{
    const context = useContext(ShoppingCartContext)
    const openCheckoutSideMenu = () =>{
        context.openShoppingSideMenu()
        context.closeProductDetail()
    }
    return(
        <div className="relative flex gap-0.5 items-center cursor-pointer" onClick={() => openCheckoutSideMenu()}>
            <ShoppingCartIcon className="h-6 cursor-pointer stroke-black" /> 
            <span className="absolute flex w-4 h-3.5 items-center justify-center top-0 font-bold  text-xs right-0 bg-orange-600 rounded-full">{context.addProductToCar.length}</span>
        </div>
    )
}
export default ShoppingCart