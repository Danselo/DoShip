import { useContext,useState } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"

function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view,setView] = useState('user-info')
    console.log(view);
    //ACCOUNT
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    //has an account
    const noAccountLocalStorage = parsedAccount ? Object.keys(parsedAccount).length ===0 : true
    const noAccountLocalState = context.account ? Object.keys(context.account).length === 0 :true
    const hasUserAccount = !noAccountLocalStorage || !noAccountLocalState
    const renderLogIn = () =>{
      return(
        <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2" disabled={!hasUserAccount}>
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-sm underline underline-offset-4" href="/">Forgot my password?</a>
        </div>
        <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
         disabled={hasUserAccount}
         onClick={() => setView('create-user-info')}>
          Sign Up
        </button>
      </div>
      )
       
    }
    const renderCreateUserInfo = ()=>{
    }
    const renderView = () => view === 'create-user-info' ?  renderCreateUserInfo() :  renderLogIn()
    return (
      <Layout>
        <h1 className="font-medium text-lg text-center mb-6 w-8">Welcome</h1>
        {renderView()}
      </Layout>
    )
  }
  
  export default SignIn