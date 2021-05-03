import UserInfo from "./components/UserInfo/UserInfo"
import Search from "./components/Search/Search"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routes: React.FC = () => (
    <div>
      <Router>
        <Switch>
            <Route
                path="/"
                render={() => (
                    <Search/>
                )}
            />
            <Route
                path="/info"
                render={() => (
                    <UserInfo/>                    
                )}
            />
        </Switch>
      </Router>
    </div>
);

export default Routes;