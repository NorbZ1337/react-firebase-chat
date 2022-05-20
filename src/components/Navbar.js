import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import Context from '../index'
import {useAuthState} from "react-firebase-hooks/auth"

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?<button onClick={() => auth.signOut()}>Выйти</button> : <NavLink to={LOGIN_ROUTE}><button >Логин</button></NavLink>}
                    
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
