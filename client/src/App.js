import React from 'react';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Tournaments from './pages/tournaments'
import Tournament from './pages/tournament'
import Team from './pages/teams'
import AdminPanel from './pages/admin'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
                    
          <Route render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main}/>
                <Route exact path="/tournaments" component={Tournaments}/>
                <Route path="/tournaments/:id" component={Tournament}/>
                <Route path="/teams" component={Team}/>
                <Route path="/admin" component={AdminPanel}/>
              </Switch>
            </AnimatePresence>
            )}
          />
          
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

// const AppExpl = () => (
//   <Router>
//     <Route
//       render={({ location }) => (
//         <AnimatePresence exitBeforeEnter initial={false}>
//           <Switch location={location} key={location.pathname}>
//             <Route exact path="/" component={Gallery} />
//             <Route exact path="/image/:id" component={SingleImage} />
//           </Switch>
//         </AnimatePresence>
//       )}
//     />
//   </Router>
// );

export default App;
