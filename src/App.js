import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import "./app.css";

function App() {
  return (
    
    <div className="App">
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/users">
        <UserList />
        </Route>
        <Route path="/user/:userId">
        <User />
        </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
