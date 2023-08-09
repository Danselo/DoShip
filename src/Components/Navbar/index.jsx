import { NavLink } from "react-router-dom"
const Navbar = () => {
    const activeStyle = 'underline underline-offset-8 shadow-lg'
    return (
        <nav className="flex justify-between items-center w-full fixed py-5 px-8 z-10 text-sm top-0 font-light bg-white">
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-xl animate-pulse font-mono text-yellow-600">
                    <NavLink 
                    to= '/' 
                    >
                        DoShip
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to= '/all'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/clothes'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/electronics'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/fornitures'
                    className = {({isActive}) => isActive ? activeStyle : undefined}              
                    >
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/toys'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
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
                <li>
                    Carrito🚙
                </li>
            </ul>
        </nav>
    )
}
export default  Navbar