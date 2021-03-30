import React from 'react';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/main'
import Tournaments from './pages/tournaments'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          {/* <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/tournaments" component={Tournaments}/>
              
          </Switch> */}
          
          <Route render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main}/>
              <Route path="/tournaments" component={Tournaments}/>
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
