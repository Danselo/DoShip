import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'

function Home() {
    const [items,setItems] = useState(null); 

    useEffect(()=> {
      //consume api using fetch and useEffect
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[])
    return (
      <Layout>
        HOME
         <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
          {
            items?.map(item => (
                <Card data= {item} key={item.id}/>
            ))
          }
         </div>
         <ProductDetail />
      </Layout>
    )
  }
  
  export default Home