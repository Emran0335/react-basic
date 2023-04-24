import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined)


export const UseProvider = ({children})=> {
    const [user] = useState({
        name: "Emran",
        email: "emarn@gmail.com",
        dob: "12/12/1990",
    })
    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}

export const useUser = ()=> useContext(UserContext);
