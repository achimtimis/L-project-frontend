import {Question} from './Question'

export class QuizRequest{
    
    quiz_id: number;
    questions: Question;
    topic : string;
    quizType: string;
    isTimed: boolean;
    timer:number;
    minScoreToPass: number;
    totalScore: number;
}