import Form from './Form';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import Button from './Button';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import {useAuth} from '../Contexts/AuthContext';
export default function SignupForm() {

    const history = useHistory();
    const [user,setUser]= useState({
        username:'',
        email:'',
        password:'',
        confirm_password:'',
        agree:''
    });
    const [error,setError] = useState("");
    const [loading,setLoading] = useState();
    const {username,email,password,confirm_password,agree} =user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
     }
    const {signUp}  =useAuth();
    async function handleSubmit(e){
        e.preventDefault();
        alert(user.email)
      if(user.password !== user.confirm_password){
        return setError("password don't match!");
      }
      try{
        setError("");
        setLoading(true);
        await signUp(user.email,user.password,user.username);
        history.push('/');
      }catch(err){
        console.log(err);
        setLoading(false);
        setError("Failed");
      }

    }
    return (
        <Form style={{height:'500px'}} onSubmit={e =>handleSubmit(e)}>
            <TextInput type="text" placeholder="Enter name" icon="person"  name="username" value={username} onChange={e => onInputChange(e) } required="required"/>
            <TextInput type="email" placeholder="Enter email" icon="alternate_email"  name="email" value={email} onChange={e => onInputChange(e) } required="required"/>
            <TextInput type="password" placeholder="Enter password" icon="lock"  name="password" value={password} onChange={e => onInputChange(e) } required="required"/>
            <TextInput type="password" placeholder="Confirm password" icon="lock_clock"  name="confirm_password" value={confirm_password} onChange={e => onInputChange(e) } required="required"/>
            <CheckBox text=" I agree to the Terms & Conditions" name="agree" value={agree} onChange={e => onInputChange(e) } required="required"/>
            <Button type="submit" disabled={loading}><span>Submit now</span></Button>
            {error && <p className='error'>{error}</p>}
            <div className="info">
                Already have an account? {process.env.REACT_APP_API_KEY}<Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}