import {AnswerWithQuestion} from './AnswerWithQuestion'

export class QuizToCorrectRequest {


    id:number;
    userId:string;
    quizId:number;
    quiz_name:string;
    answerList:AnswerWithQuestion[];
    time:number;
    score:number;
    isPassed:boolean;
    extraFeedback:string;

    constructor(
    id?:number,
    userId?:string,
    quizId?:number,
    quiz_name?:string,
    answerList?:AnswerWithQuestion[],
    time?:number,
    score?:number,
    isPassed?:boolean,
    extraFeedback?:string,
    ){
        this.userId = userId;
        this.quizId = quizId;
        this.quiz_name = quiz_name;
        this.answerList = answerList;
        this.time = time;
        this.score = score;
        this.isPassed = isPassed;
        this.extraFeedback = extraFeedback;
    }

}