import { Children, createContext,useState } from "react";



export const AuthContext= createContext()



function AuthContextProvider({children}){

    const [isAuth,SetisAuth]=useState(false)


    return(
        <AuthContext.Provider value={{isAuth,SetisAuth}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContextProvider;