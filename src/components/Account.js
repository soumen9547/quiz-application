import classes from "../styles/Account.module.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
export default function Account() {
    const { currentUser,logout } = useAuth();
    return (
        <div className={classes.account}>
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span
                        className="material-icons-outlined" title="Logout" onClick={logout}> {" "}logout{" "} 
                    </span>
                </>) : (
                <>
                    <Link to="/sign-up">Signup</Link>
                    <Link to="/login">Login</Link>
                </>

            )}

        </div>
    );
}