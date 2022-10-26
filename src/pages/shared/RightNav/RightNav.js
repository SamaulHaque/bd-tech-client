import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightNav = () => {
    const {loginWithGoogle} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        loginWithGoogle(provider)
        .then((result) => {
            const user =result.user;
            console.log(user)
        })
        .catch((error) => {
            console.error(error)
        })
    }
    return (
        <ButtonGroup vertical>
            <Button onClick={handleSignIn} variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
        </ButtonGroup>

    );
};

export default RightNav;