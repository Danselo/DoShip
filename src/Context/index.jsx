import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingContext = ({children})=> {
    return(
        <ShoppingCartContext>
            {children}
        </ShoppingCartContext>
    )
}