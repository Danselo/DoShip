import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon} from "@heroicons/react/24/outline";
const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8 shadow-lg'
    return (
        <nav className="flex justify-between items-center w-full fixed py-5 px-8 z-10 text-sm top-0 font-light bg-white">
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-xl animate-pulse font-mono text-yellow-600">
                    <NavLink 
                    to= '/' 
                    onClick={() => context.setSearchByCategory('')}
                    >
                        DoShip
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('')}

                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/clothes'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('clothes')}

                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/electronics'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('electronics')}

                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/fornitures'
                    className = {({isActive}) => isActive ? activeStyle : undefined} 
                    onClick={() => context.setSearchByCategory('fornitures')}

                    >
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/toys'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('toys')}

                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-center gap-3 ">
                <li className="text-black/60">
                    dani@gmail.com
                </li>
                <li>
                    <NavLink to= '/my-orders'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/my-account'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>  
                </li>
                <li>
                    <NavLink to= '/sign-in'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="relative">
                <ShoppingCartIcon className="h-6" /> 
                <span className="absolute flex w-4 h-3.5 items-center justify-center top-0 font-bold  text-xs right-0 bg-orange-600 rounded-full">{context.addProductToCar.length}</span>
                </li>
            </ul>
        </nav>
    )
}
export default  Navbar