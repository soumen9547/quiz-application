
import Answers from './Answers';
import classes from '../styles/Question.module.css';
export default function Question({ answers }) {

    return (
        answers.map((answer, index) => (
            <div className={classes.question} key={index}>
                <div className={classes.title}>
                    <span className="material-icons-outlined"> help_outline </span>
                    {answer.title}
                </div>
                <Answers input={false} options={answer.options} />
            </div>
        ))
    );
}