import './App.css';
import React, { useEffect, useCallback } from "react";
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
  const [data, setData] = React.useState([]);

  const handleFetch = useCallback((newData) => setData(newData));
  useEffect(() => {
    if (data === undefined) return;
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/info">
            <UserInfo data={data}/>
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
