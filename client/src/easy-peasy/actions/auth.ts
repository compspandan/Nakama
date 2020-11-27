import { action } from 'easy-peasy';

export const logIn = action((state: any, user: any) => {
    state.loggedIn = true;
    state.user = user;
});

export const logOut = action((state: any) => {
    state.loggedIn = false;
    state.user = undefined;
});
