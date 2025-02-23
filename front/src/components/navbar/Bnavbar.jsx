import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../../api/context/GlobalState';

const Bnavbar = () => {

    const {isAuth, handleLogout} = useContext(GlobalContext)

    

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {isAuth ? "" :
                                <><Link to={`login`} className='nav-link'> Giriş </Link>
                                <Link to={`register`} className='nav-link'> Kayıt </Link></>
                        }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {
                    isAuth ?  <button onClick={handleLogout}>Çıkış yap</button> : <Navigate to={"/"} replace={true}/>
                }
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Bnavbar