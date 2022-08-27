import Form from './Form';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import Button from './Button';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
export default function LoginForm() {

    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState();
    const { email, password } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { login } = useAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        if(!user.email && !user.password){
            return setError("please enter email & password");
        }else if(!user.email && user.password){
            return setError("please enter email");
        }else if(user.email && !user.password){
            return setError("please enter password");
        }
        try {
            setError("");
            setLoading(true);
            await login(user.email, user.password);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed login");
        }

    }
    return (
        <Form style={{height:'330px'}}>
            <TextInput type="email" placeholder="Enter email" icon="alternate_email"  name="email" value={email} onChange={e => onInputChange(e) } required="required"/>
            <TextInput type="password" placeholder="Enter password" icon="lock"  name="password" value={password} onChange={e => onInputChange(e) } required="required"/>
            <Button type="submit" disabled={loading} onClick={e =>handleSubmit(e)}><span>Submit now</span></Button>
            {error && <p className='error'>{error}</p>}
            <div className="info">Don't have an account? <Link to="/sign-up">Signup</Link> instead.</div>
        </Form>
    );
}