import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const {logIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(() => {
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Login
            </Button>
            <span className='text-danger ms-3'>{error}</span>
            <p>Are you new in this site? <Link to='/register'>Please Register</Link></p>
        </Form>

    );
};

export default Login;