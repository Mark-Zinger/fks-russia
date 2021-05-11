// in src/App.js
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import users from './users';
import tours from './tours'
import createAdminStore from './createAdminStore';
import dataProvider from './dataProvider'
import authProvider from './authProvider'



// dependency injection
// const dataProvider = restProvider('/');
// const dataProvider = simpleRestProvider('http://localhost:3000');



const App = () => {

    const history = createHashHistory();

    return  <Provider
        store={createAdminStore({
            authProvider,
            dataProvider,
            history,
        })}
    >
        <Admin
            authProvider={authProvider}
            dataProvider={dataProvider}
            history={history}
            title="My Admin"
        >
            <Resource {...users}/>
            <Resource {...tours}/>
        </Admin>
    </Provider>
};

export default App;