import UserInfo from "./components/UserInfo/UserInfo"
import Search from "./components/Search/Search"
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routes: React.FC = () => (
    <div>
      <Router >
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <Search/>
                )}
            />
            <Route
                path="/info"
                component={UserInfo}
                // render={() => (
                //     <UserInfo/>                    
                // )}
            />
        </Switch>
      </Router>
    </div>
);

export default Routes;