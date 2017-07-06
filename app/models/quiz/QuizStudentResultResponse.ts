import {AnsweredQuestion} from './AnsweredQuestion'

export class QuizStudentResultResponse{

    id:number;
    quiz_id:number;
    quiz_name:string;
    answeredQuestions:AnsweredQuestion[];
    score:number;
    totalScore:number;
    isPassed:boolean;
    isCorrected:boolean;
    extraFeedback:string;
    totalDuration:number;
    student:string;

    constructor(
    id?:number,
    quiz_id?:number,
    quiz_name?:string,
    answeredQuestions?:AnsweredQuestion[],
    score?:number,
    totalScore?:number,
    isPassed?:boolean,
    isCorrected?:boolean,
    extraFeedback?:string,
    totalDuration?:number,
    student?:string
    ){
        this.id = id;
        this.quiz_id = quiz_id;
        this.quiz_name = quiz_name;
        this.answeredQuestions =answeredQuestions;
        this.score  = score;
        this.totalScore = totalScore;
        this.isCorrected = isCorrected;
        this.isPassed = isPassed;
        this.extraFeedback = extraFeedback;
        this.totalDuration = totalDuration;
        this.student = student;
    }
}