import React from 'react';
import { AnswerObject } from '../App'
// import {wrapper,ButtonWrapper} from './QuestionsCard.style'
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
const QuestionsCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr} | {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {
                    answers.map((answer) => (
                        <div key={answer}>
                            <button className={
                            `
                            btn mb-2
                            ${userAnswer?.answer !== answer ? 'btn-info': userAnswer.answer === answer && userAnswer?.correct=== true ? 'btn-success': userAnswer.answer === answer && userAnswer.correct === false ? 'btn-danger': ''}
                            `
                        } disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuestionsCard;