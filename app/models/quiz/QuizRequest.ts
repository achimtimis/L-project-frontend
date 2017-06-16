import { Question } from './Question'

export class QuizRequest {

    quiz_id: number;
    questions: Question[];
    topic: string;
    quizType: string;
    isTimed: boolean;
    timer: number;
    minScoreToPass: number;
    totalScore: number;

    constructor(quiz_id: number,
        questions: Question[],
        topic: string,
        quizType: string,
        isTimed: boolean,
        timer: number,
        minScoreToPass: number,
        totalScore: number) {
        this.quiz_id = quiz_id;
        this.questions = questions;
        this.topic = topic;
        this.quizType = quizType;
        this.isTimed = isTimed;
        this.timer = timer;
        this.minScoreToPass = minScoreToPass;
        this.totalScore;
    }
}