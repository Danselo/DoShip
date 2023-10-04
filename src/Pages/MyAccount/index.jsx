import { useContext,useState,useRef } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"

function MyAccount() {
  const context = useContext(ShoppingCartContext)

  const [view,setView] = useState('user-info')
    const form = useRef(null)
    //ACCOUNT
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    
    const editAccount = () => {
      const formData = new FormData(form.current)
      const data = {
        name : formData.get('name'),
        email : formData.get('email'),
        password : formData.get('password')
      }

      //Update Account
      const stringifiedAccount = JSON.stringify(data)
      localStorage.setItem('account',stringifiedAccount)
      context.setAccount(data)
    }
    // validate form 


  
    const handleFormSubmit = (event) => {
      event.preventDefault(); // Prevenir la recarga de la página
        // El correo es válido, puedes cambiar la vista y luego llamar a editAccount
        setView('user-info');
        editAccount();
   
    };
    
    
    const renderUserInfo = () => {
      return(
        <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Name:</span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className="font-light text-sm">Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span>{parsedAccount?.password ? '*'.repeat(parsedAccount.password.length) : ''}</span>
        </p>
          <button 
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
          onClick={() => setView('edit-user-info')}
           >
            Edit
          </button>

      </div>
      )
    }

    const renderEditInfo = () => {
      return(
        <form ref={form} className="flex flex-col gap-4 w-80" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">Your name:</label>
            <input 
            type="text"
            id="name"
            name= "name"
            defaultValue={parsedAccount?.name}
            placeholder="Adam"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">Your email:</label>
            <input 
            type="email"
            id="email"
            name= "email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@helloword.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            required
            />
          </div>
             <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">Your password:</label>
            <input 
            type="password"
            id="password"
            name= "password"
            defaultValue={parsedAccount?.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            required
            />
          </div>
            <button
             className="bg-black text-white w-full rounded-lg py-3"
             type="submit"
             >
              Edit
            </button>
        </form>   
      )
      
    }
    const renderView = () => view === 'edit-user-info' ? renderEditInfo() : renderUserInfo()
    return (
      <Layout>
        <h1 className="font-medium text-xl text-center mb-6 w-80">My account</h1>
        {renderView()}
      </Layout>
    )
  }
  
  export default MyAccount