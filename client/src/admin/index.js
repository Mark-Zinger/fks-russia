// in src/App.js
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './users';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

import createAdminStore from './createAdminStore';



// dependency injection
// const dataProvider = restProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const authProvider = () => Promise.resolve();

const history = createHashHistory();

const App = () => (
    <Provider
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
            {/* <Resource name="posts" />
            <Resource name="comments"/> */}
            <Resource name="users" list={UserList} />
        </Admin>
    </Provider>
);

export default App;