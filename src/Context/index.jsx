import { createContext, useState} from "react";

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
    const [showProductDetail, setShowProductDetail] = useState({
        title: "",
        description: "",
        images : [],
        price : ""
    });

    return(
        <ShoppingCartContext.Provider value={{
            setCount,
            count,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            showProductDetail,
            setShowProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}