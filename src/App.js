import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ThemeModeContext from "./contexts/themeMode";
import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar';
import ProfileCard from "./components/ProfileCard";
import "./css/App.css";

function App() {
  // profile data
  // we will use the useEffect hook to get the data 
  // of the GitHub profile @octocat on the first render
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const { theme } = useContext(ThemeModeContext);

  useEffect(() => {
    async function getFirstData(){
      const userData = await axios.get(`https://api.github.com/users/octocat`);
      setData(userData.data);
    }
    getFirstData();
  }, []);

  // event handlers
  const handleSearch = async (username) => {
    try {
      const userData = await axios.get(`https://api.github.com/users/${username}`);
      setData(userData.data);
      if(show === true)
        setShow(false);
    }
    catch(err) {
      if(show === false)
        setShow(true);
    }
  }

  return (
    <div className="App" id={theme}>
      <div className="wrapper">
        <NavBar />
        <SearchBar handleSearch={handleSearch} show={show}/>
        <ProfileCard userData={ data }/>
      </div>
    </div>
  );
}

export default App;
