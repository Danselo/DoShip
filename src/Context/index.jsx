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

    //Get Products by category

    const [searchByCategory,setSearchByCategory] = useState(null); 

    //filtered products
    const [filteredItems,setFilteredItems] = useState(null); 

    
    // const filterProductsTitle  =  (items,searchByTitle) => {
    //     //el filtrado para saber si incluye
    //     return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    // }
    const filterByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filterByCategory = (items,searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType,items,searchByCategory , searchByTitle) => {
        if(searchType === 'BY_TITLE'){
            return filterByTitle(items,searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filterByCategory(items,searchByCategory)
        }
        if(!searchType){
            return items
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filterByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    }

    useEffect(()=> {
      //consume api using fetch and useEffect
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[])

    useEffect(()=> {
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items,searchByCategory, searchByTitle))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchByCategory, searchByTitle))
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByCategory, searchByTitle))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null,items,searchByCategory, searchByTitle))



      },[items,searchByTitle,searchByCategory])
      console.log(filteredItems);
  
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
            setSearchByTitle,
            filteredItems,
            setSearchByCategory,
            searchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}