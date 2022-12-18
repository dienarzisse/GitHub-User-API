import { useState } from "react";
import searchIcon from "../imgs/icon-search.svg";
import "./css/SearchBar.css";

function SearchBar({ handleSearch, show, setShow }){
    const [input, setInput] = useState("");

    // event handlers
    const handleChange = (event) => {
        setInput(event.target.value);
        setShow(false);
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        handleSearch(input);
        setInput("");
    }

    return (
        <form className="searchbar" onSubmit={ handleSumbit }>
            <div className="input-wrapper">
            <label>
                <span>Search</span>
                <img src={searchIcon} alt="search icon"></img>
            </label>
            <input value={input} placeholder="Search GitHub username..." onChange={ handleChange }></input>
            </div>
            <div className={ show ? "no-results":"not-shown"}>No results</div>
            <button>Search</button>
        </form>
    );
}

export default SearchBar;