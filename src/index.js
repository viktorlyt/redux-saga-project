import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/home";
import LatestNews from "./pages/latestNews/latestNews";
import PopularNews from "./pages/popularNews/popularNews";
import { history } from "./redux/reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <App>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/latest-news" exact>
                <LatestNews />
              </Route>
              <Route path="/popular-news" exact>
                <PopularNews />
              </Route>
            </Switch>
          </App>
        </Router>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
