import { useContext } from "react";
import "./css/NavBar.css";
import darkThemeIcon from "../imgs/icon-moon.svg";
import lightThemeIcon from "../imgs/icon-sun.svg";
import ThemeModeContext from "../contexts/themeMode";

function NavBar(){
    const { theme, setTheme } = useContext(ThemeModeContext);
    // event handlers
    function handleClick(){
        setTheme((theme) => { return theme === "dark" ? "light": "dark" });
    }

    return (
        <nav>
            <header>devfinder</header>
            <div className="theme-mode">
                <span>{ theme === "light" ? "dark":"light" }</span>
                <img src={theme === "light" ? darkThemeIcon : lightThemeIcon } alt="dark mode" onClick={handleClick}></img>
            </div>
        </nav>
    );
}

export default NavBar;