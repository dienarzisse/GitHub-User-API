import {createContext, useState} from "react";
const ThemeModeContext = createContext(null);

function Provider({children}){
    const [theme, setTheme] = useState('dark');
    const valueToShare = {
        theme,
        setTheme
    }
    
    return <ThemeModeContext.Provider value={valueToShare}>
        {children}
        </ThemeModeContext.Provider>
}
export { Provider };
export default ThemeModeContext;