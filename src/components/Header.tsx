import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const Header: React.FC = () => {

    const [registerModal, setRegisterModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);


    function showRegisterModal () {
        setRegisterModal(true)
    }

    function closeRegisterModal () {
        setRegisterModal(false)
    }

    function showLoginModal () {
        setLoginModal(true)
    }

    function closeLoginModal () {
        setLoginModal(false)
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Button color='inherit' onClick={showLoginModal}>
                        Login
                    </Button>
                    <Button color='inherit' onClick={showRegisterModal} >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
            {
            registerModal && 
            <RegisterPage params={{stateModal: registerModal, handleModal: closeRegisterModal}} />
            }
            {
            loginModal &&
            <LoginPage params={{stateModal: loginModal, handleModal: closeLoginModal}}  />
            }
        </Box>
    )
}

export default Header;