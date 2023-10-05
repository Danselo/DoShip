import { useContext } from 'react'
import { useRoutes,BrowserRouter,Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
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
    <>
    <div>
      {/* Contenido de tu página */}
      <Helmet>
        <title>DoShip</title>
        <meta property="og:title" content="E-commerce y venta de productos" />
        <meta property="og:description" content="Venta de ropa,accesorios y aparatos tecnologicos" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
        <meta property="og:url" content="https://do-ship.vercel.app/" />
        {/* Otras etiquetas meta si es necesario */}
      </Helmet>
    </div>

    <ShoppingContext>
      <BrowserRouter>
      <AppRouters />
      <Navbar />
      <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingContext>
    </>
    
    
  )
}

export default App
