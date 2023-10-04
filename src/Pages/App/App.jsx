import { useContext } from 'react'
import { useRoutes,BrowserRouter,Navigate } from 'react-router-dom'
import { ShoppingCartContext, ShoppingContext, initializeLocalStorage } from '../../Context'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import  Navbar  from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
const AppRouters = () => {
  //important install react-router-dom and import 
  const context = useContext(ShoppingCartContext)
  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  //sign In
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  //has an account
  const noAccountLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountLocalStorage || !noAccountLocalState
  const hasUserSignOut = context.signOut || parsedSignOut

  const router = useRoutes([
    { path: '/', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/fornitures', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !hasUserSignOut ?  <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return router
}
function App() {
  initializeLocalStorage()
  return (
    <ShoppingContext>
      <BrowserRouter>
      <AppRouters />
      <Navbar />
      <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingContext>
    
  )
}

export default App
