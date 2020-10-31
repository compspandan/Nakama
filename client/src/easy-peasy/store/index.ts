import { createStore } from 'easy-peasy';
import { logIn, logOut } from '../actions/auth';
import initStore from './initalStore';

const store = createStore({
    auth: {
        loggedIn: initStore.loggedIn,
        logIn: logIn,
        logOut: logOut,
    },
});

export default store;
