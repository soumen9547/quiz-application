import classes from '../styles/Button.module.css';
export default function Button({className, children,...rest}) {

    return (
        <div className={classes.button} {...rest}>
            {children}
        </div>
    );
}