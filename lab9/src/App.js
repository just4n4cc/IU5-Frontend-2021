import './App.css';
import React, { useMemo } from "react";
import {Footer} from "./components/Footer/Footer"
import {Header} from "./components/Header/Header"
import {UserInfo} from "./components/UserInfo/UserInfo"
import {Search} from "./components/Search/Search"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const a = 5;
  // console.log(process)
  // fetch("https://username:" + process.env.REACT_APP_API_KEY +"@api.github.com/users/katekaa").then((data)=>data.json()).then((res)=>console.log(res));
  // fetch("https://api.github.com/users/katekaa", {Authorization: process.env.REACT_APP_API_KEY}).then((data)=>data.json()).then((res)=>console.log(res));
  

  const [data, setData] = React.useState([]);

  const handleFetch = useMemo((newData) => {setData(newData); console.log(data)});

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/info">
            <UserInfo/>
          </Route>
          <Route path="/">
            <Search handle={handleFetch}/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
