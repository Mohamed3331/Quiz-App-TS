
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

const shuffleMyArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`
    const data = await fetch(endPoint)
    const {results} = await data.json()
    
    return results.map((question: Question) => (
        {
            ...question,
            answers: shuffleMyArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}

