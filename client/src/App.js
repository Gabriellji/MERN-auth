import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
