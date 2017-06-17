import { Question } from './Question'

export class QuizRequest {

    quiz_id: number;
    name:string;
    questions: Question[];
    topic: string;
    quizType: string;
    isTimed: boolean;
    timer: number;
    minScoreToPass: number;
    totalScore: number;

    constructor(quiz_id?: number,
        name?:string,
        questions?: Question[],
        topic?: string,
        quizType?: string,
        isTimed?: boolean,
        timer?: number,
        minScoreToPass?: number,
        totalScore?: number) {
        this.quiz_id = quiz_id;
        this.name = name;
        this.questions = questions;
        this.topic = topic;
        this.quizType = quizType;
        this.isTimed = isTimed;
        this.timer = timer;
        this.minScoreToPass = minScoreToPass;
        this.totalScore;
    }
}