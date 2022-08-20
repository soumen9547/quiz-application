import CheckBox from '../components/CheckBox';
import classes from '../styles/Answers.module.css';
export default function Answers() {

    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer}  text="Test answers"/>
        </div>

    )
}