import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppingContext } from '../../Context'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import  Navbar  from '../../Components/Navbar'
const AppRouters = () => {
  //important install react-router-dom and import 

  const router = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return router
}
function App() {
 
  return (
    <ShoppingContext>
      <BrowserRouter>
      <AppRouters />
      <Navbar />
      </BrowserRouter>
    </ShoppingContext>
    
  )
}

export default App
