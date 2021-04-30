// in src/App.js
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource, ListGuesser } from 'react-admin';
import users from './users';
import simpleRestProvider from 'ra-data-simple-rest';
import createAdminStore from './createAdminStore';



// dependency injection
// const dataProvider = restProvider('/');
const dataProvider = simpleRestProvider('http://localhost:3000');
const authProvider = {
    // authentication
    login: params => Promise.resolve(),
    checkError: error => Promise.resolve(),
    checkAuth: params => Promise.resolve(),
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),

}


const App = () => {

    const history = createHashHistory();

    React.useEffect(() => {
        console.log(history)
    }, history)

    React.useEffect(() => {
        console.log('helllo')
        window.addEventListener("hashchange", (e)=>console.log('hashchange'), false);
    },[])

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
            {/* <Resource name="posts" />
            <Resource name="comments"/> */}
            <Resource 
                {...users}
                // name={'users'}
                // list={ListGuesser}
            />
        </Admin>
    </Provider>
};

export default App;