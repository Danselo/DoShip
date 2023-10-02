import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from "../../Context"

function Home() {
    const context = useContext(ShoppingCartContext)
    const renderProducts = () =>{
        if(context.filteredItems?.length > 0){
          return(
            context.filteredItems?.map(item => (
              <Card data= {item} key={item.id}/>
            ))
          )
        }else{
          return(
            <div>We don´t find concidences </div>
          )
        }
    }
    return (
      <Layout>
          <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-semibold">Exclusive Products</h1>
        </div>
        <input 
        type="text" 
        placeholder="Search product"
         className="border border-black w-80 focus:outline-none mb-4 p-4 rounded-lg"
         onChange={(event) => context.setSearchByTitle(event.target.value) }/>
         <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
          {
           renderProducts()
          }
         </div>
         <ProductDetail />
      </Layout>
    )
  }
  
  export default Home