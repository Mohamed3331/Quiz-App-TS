import React from 'react'
import { ButtonWrapper, Wrapper } from './QuestionCard.style'

type Props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNo: number
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = (props) => {

    return (
        <>
            <Wrapper>
                <p className="number">
                    Question: {props.questionNo} / {props.totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: props.question }}></p>
                <div>
                    {props.answers && props.answers.map((answer, indx) => (
                        <div key={indx}>
                            <ButtonWrapper
                                key={answer}
                                correct={props.userAnswer?.correctAnswer === answer}
                                userClicked={props.userAnswer?.answer === answer}
                            >
                                <button disabled={props.userAnswer} value={answer} onClick={props.callback}>
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </button>
                            </ButtonWrapper>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>

    )
}

export default QuestionCard
