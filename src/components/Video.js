import classes from '../styles/Video.module.css';
export default function Video({title ,id, noq}) {
    return (
        <div className={classes.video}>
            <img src={`https://blog.hubspot.com/hubfs/google-quiz.jpg`} alt={title} />
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p>{noq}</p>
                <p>Total ponit : { noq*5}</p>
            </div>
        </div>
    );
}
