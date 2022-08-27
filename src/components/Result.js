import Summary from './Summary';
import Analysis from './Analysis';
import { useHistory, useParams } from 'react-router-dom';
import useAnswers from '../hooks/useAnswer';
import _ from 'lodash'
export default function Result() {
    const { id } = useParams();
    const { loading, error, answers } = useAnswers(id);
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state;
    console.log(answers);
    function calculate() {
        let score = 0;
        answers.forEach((question, index1) => {
            let correctIndexess = [],
                checkedIndexess = [];
            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexess.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexess.push(index2);
                    option.checked = true;
                }

            })
            if (_.isEqual(correctIndexess, checkedIndexess)) {
                score = score + 5;
            }
        })

        return score;
    }

    const userScore = calculate();
    return (

        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary  score={userScore}  noq={answers.length}/>
                    <Analysis answers={answers}/>

                </>

            )}

        </>

    );
}