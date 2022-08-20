import classes from '../styles/Illustration.module.css';
import signupimage from '../assets/images/signup.svg';
export default function Illustration() {

    return (
        <div className={classes.illustration}>
            <img src={signupimage} alt="Signup" />
        </div>
    );
}