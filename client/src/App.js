import React, {useState} from 'react';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Tournaments from './pages/tournaments'
import Tournament from './pages/tournament'
import Teams from './pages/teams'
import Team from './pages/team'
import AdminPanel from './pages/admin'
import { AnimatePresence } from 'framer-motion'
import AppContext from './context/AppContext'

function App() {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);


  return (
    <Provider store={store}>
      <AppContext.Provider value={{isOpenAuthModal, setIsOpenAuthModal}}>
        <BrowserRouter>
          <Layout>
            <Route render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/tournaments" component={Tournaments}/>
                  <Route path="/tournaments/:id" component={Tournament}/>
                  <Route exact path="/teams" component={Teams}/>
                  <Route path="/teams/:id" component={Team}/>
                  <Route path="/admin" component={AdminPanel}/>
                </Switch>
              </AnimatePresence>
              )}
            />
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
