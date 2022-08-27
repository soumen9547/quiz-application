
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Login.module.css';
import TextInput from '../TextInput';
import Button from '../Button';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration/>
               <LoginForm/>
            </div>
        </>
    );
}