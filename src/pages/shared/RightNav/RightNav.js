import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightNav = () => {
    const {loginWithGoogle, loginWithGitHub} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        loginWithGoogle(googleProvider)
        .then((result) => {
            const user =result.user;
            console.log(user)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const handleGithubSignIn = () => {
        loginWithGitHub(gitHubProvider)
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
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
        </ButtonGroup>

    );
};

export default RightNav;