import {Question} from './Question'
import {Answer} from './Answer'

export class AnsweredQuestion{
    question: Question;
    answer:Answer;
    score:number;
    maxScore:number;
    observation:string;

    constructor(
    question?: Question,
    answer?:Answer,
    score?:number,
    maxScore?:number,
    observation?:string,
    ){
        this.question = question;
        this.answer = answer;
        this.score = score;
        this.maxScore = maxScore;
        this.observation = observation;
    }
}