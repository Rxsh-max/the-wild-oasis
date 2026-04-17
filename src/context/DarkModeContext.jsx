import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";


const DarkModeContext = createContext()

function DarkModeProvider({children}){
    const [isDarkMode , setIsDarkMode] = useLocalStorageState(false,'isDarkMode')

        useEffect(function(){
            if(isDarkMode) {
                document.documentElement.classList.add('dark-mode')
                document.documentElement.classList.remove('light-mode')
            }
            else{
                 document.documentElement.classList.remove('dark-mode')
                document.documentElement.classList.add('light-mode')
            }
        },[isDarkMode])


    function toggleDarkMode(){
        setIsDarkMode((isDark)=>!isDark)
    }


    return <DarkModeContext.Provider value={{toggleDarkMode,isDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}




  export {DarkModeProvider , DarkModeContext }