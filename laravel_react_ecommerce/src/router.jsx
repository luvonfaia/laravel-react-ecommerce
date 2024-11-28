/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './views/login.jsx';
import Register from './views/register.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Users from './views/users.jsx';
import UserForm from './views/UserForm.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />, //interfata defaul pentru cei autentifiati
        children: [
            {
            path: '/users',
            element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },
           
        ]
        
    },

    {
        path: '/',
        element: <GuestLayout />, //interfata pentru cei NE-autentificati
        children: [
            {
            path: '/login',
            element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
           
        ]
        
    },


]);

export default router;