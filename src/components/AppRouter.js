import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import {useAuthState} from "react-firebase-hooks/auth"
import Context from '../index'
import Chat from './Chat';
import Login from './Login';

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user)
    return <Routes>
    {user
      ? (privateRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Chat/>}/>))
      : publicRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Login/>} />)}
    </Routes>

};

export default AppRouter;