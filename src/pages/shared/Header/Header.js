import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .cath(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">BD Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        
                        {
                            user?.uid ?
                            <>
                            <span>{user?.displayName}</span>
                            <Button onClick={handleLogOut} className='mx-3' size="sm">Log Out</Button>
                            </>
                            :
                            <>
                            <Link className='mx-3' to='/login'><Button size="sm">Login</Button></Link>
                            <Link className='mx-3' to='/register'><Button size="sm">Register</Button></Link>
                            </>
                        }
                        {
                            user?.photoURL ?
                                <Image
                                    src={user?.photoURL}
                                    style={{ height: '30px' }}
                                    roundedCircle
                                ></Image>
                                :
                                <FaUser></FaUser>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;