import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from './favicon.jpg'
import './Header.css'


const Header = () => {
    const { user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .cath(error => console.error(error))
    }
    return (
        <Navbar className='mb-4 nav-routes' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                
                <Link to='/'><Image style={{height:'30px', width:'40px'}} src={logo}></Image></Link>
                <Link  to='/'>BD Tech</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        
                        {
                            user?.uid ?
                            <div className=''>
                            <span className='me-3 '>{user?.displayName}</span>
                            <Link className='log-out'><Button onClick={handleLogOut} className='me-3 mt-2 mb-2' size="sm" >Log Out</Button></Link>
                            </div>
                            :
                            <>
                            <Link className='me-3 mt-2' to='/login'><Button size="sm">Login</Button></Link>
                            <Link className='me-3 mt-2' to='/register'><Button size="sm">Register</Button></Link>
                            </>
                        }
                        {
                            user?.photoURL ?
                                <div className='d-flex align-items-center'>
                                    <Image 
                                    src={user?.photoURL}
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    fluid
                                ></Image>
                                </div>
                                :
                                <FaUser className='my-3'></FaUser>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;