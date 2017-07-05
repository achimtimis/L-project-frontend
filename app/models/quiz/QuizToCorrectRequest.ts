import {AnswerWithQuestion} from './AnswerWithQuestion'

export class QuizToCorrectRequest {


    id:number;
    userId:string;
    quizId:number;
    quiz_name:string;
    answerList:AnswerWithQuestion[];
    time:number;
    minScoreToPass:number;
    score:number;
    isPassed:boolean;   
    extraFeedback:string;
    totalScore:number;

    constructor(
    id?:number,
    userId?:string,
    quizId?:number,
    quiz_name?:string,
    answerList?:AnswerWithQuestion[],
    time?:number,
    minScoreToPass?:number,
    score?:number,
    isPassed?:boolean,
    extraFeedback?:string,
    totalScore?:number
    ){
        this.userId = userId;
        this.quizId = quizId;
        this.quiz_name = quiz_name;
        this.answerList = answerList;
        this.time = time;
        this.minScoreToPass = minScoreToPass;
        this.score = score;
        this.isPassed = isPassed;
        this.extraFeedback = extraFeedback;
        this.totalScore = totalScore;
    }

}