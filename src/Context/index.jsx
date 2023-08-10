import { createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingContext = ({children})=> {
    const [count, setCount] = useState(0)
    return(
        <ShoppingCartContext.Provider value={{
            setCount,
            count
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}