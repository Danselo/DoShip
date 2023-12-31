import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import ShoppingCart from "../ShoppingCart";
const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8 shadow-lg'

    //Sign out
    const singOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(singOut)
    const isUserSignOut = context.singOut || parsedSignOut

    //Account 
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //has an account
    const noAccountLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountLocalStorage || !noAccountLocalState

    const renderView = () => {
        if(hasUserAnAccount && !isUserSignOut){
            return (
                <>
                <li className="text-black/60 sm:hidden">
                    {parsedAccount?.email}
                </li>
                <li>
                    <NavLink to= '/my-orders'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/my-account'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Profile
                    </NavLink>  
                </li>
                <li className="text-red-500 font-semibold">
                    <NavLink to= '/sign-in'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={()=> handleSignOut()}
                    >
                        Sign out
                    </NavLink>
                </li>
                </>
               
            )
        }else{
            return(
                <li>
                <NavLink to= '/sign-in'
                className = {({isActive}) => isActive ? activeStyle : undefined}
                onClick={()=> handleSignOut()}
                >
                    Sign in
                </NavLink>
            </li>
            )
        }
    }
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out',stringifiedSignOut);
        context.setSignOut(true)
    }
    return (
        <nav className="flex justify-between items-center w-full fixed py-5 px-8 z-10 text-sm top-0 font-light bg-white">
            <ul className="flex items-center gap-3 ">
                <li className="font-semibold text-xl animate-pulse font-mono text-yellow-600">
                    <NavLink 
                    to={`${isUserSignOut ? '/sign-in' : '/'}`} 
                    onClick={() => context.setSearchByCategory('')}
                    >
                        DoShip
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'} >
                    <NavLink 
                    to={`${isUserSignOut ? '/sign-in' : '/'}`} 

                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('')}

                    >
                        All
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'}>
                    <NavLink to= '/clothes'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('clothes')}

                    >
                        Clothes
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'}>
                    <NavLink to= '/electronics'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('electronics')}

                    >
                        Electronics
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'}>
                    <NavLink to= '/fornitures'
                    className = {({isActive}) => isActive ? activeStyle : undefined} 
                    onClick={() => context.setSearchByCategory('fornitures')}

                    >
                        Fornitures
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'}>
                    <NavLink to= '/toys'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('toys')}

                    >
                        Toys
                    </NavLink>
                </li>
                <li className={hasUserAnAccount && !isUserSignOut ? 'sm:hidden' : 'hidden'}>
                    <NavLink to= '/others'
                    className = {({isActive}) => isActive ? activeStyle : undefined}
                    onClick={() => context.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li >
            </ul>
            <ul className="flex justify-center gap-3 sm:gap-5 sm:justify-between ">
                {renderView()}
                <li className="relative">
                {/* <ShoppingCartIcon className="h-6" /> 
                <span className="absolute flex w-4 h-3.5 items-center justify-center top-0 font-bold  text-xs right-0 bg-orange-600 rounded-full">{context.addProductToCar.length}</span> */}
                <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
}
export default  Navbar