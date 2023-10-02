import { createContext, useState,useEffect} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingContext = ({children})=> {
    //shopping cart quantity
    const [count, setCount] = useState(0)

    //Show ProductDetail
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);

    //Product-Detail: Open/Close
    const openProductDetail = () => setIsOpenProductDetail(true);
    const closeProductDetail = () => setIsOpenProductDetail(false);
    //show Product
    const [showProductDetail, setShowProductDetail] = useState({});
    
    //ShoppingSideMenu-Detail: Open/Close
    const [isOpenShoppingSideMenu, setIsOpenShoppingSideMenu] = useState(false);

    const openShoppingSideMenu = () => setIsOpenShoppingSideMenu(true);
    const closeShoppingSideMenu = () => setIsOpenShoppingSideMenu(false);

    //Shopping Car,, ADD Product
    const [addProductToCar, setAddProductToCar] = useState([]);
    //Order,, ADD Order

    const [order, setOrder] = useState([]);

    //Get products
    const [items,setItems] = useState(null); 

    //Get Products by title

    const [searchByTitle,setSearchByTitle] = useState(null); 

    useEffect(()=> {
      //consume api using fetch and useEffect
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[])

    return(
        <ShoppingCartContext.Provider value={{
            setCount,
            count,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            showProductDetail,
            setShowProductDetail,
            addProductToCar,
            setAddProductToCar,
            openShoppingSideMenu,
            closeShoppingSideMenu,
            isOpenShoppingSideMenu,
            order,
            setOrder,
            setItems,
            items,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}