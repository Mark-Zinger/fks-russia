import React from 'react';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Tournaments from './pages/tournaments'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/tournaments" component={Tournaments}/>
            
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
