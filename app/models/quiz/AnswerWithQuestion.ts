import {Question} from './Question'


export class AnswerWithQuestion{

    id:number;
    question:Question;
    userId:string;
    chosenOptions:number[];
    inputResponse:string;
    graded_score:number;
    observation:string;


    constructor(
    id?:number,
    question?:Question,
    userId?:string,
    chosenOptions?:number[],
    inputResponse?:string,
    graded_score?:number,
    observation?:string
    ){
        this.id = id;
        this.question= question;
        this.userId = userId;
        this.chosenOptions = chosenOptions;
        this.inputResponse = inputResponse;
        this.graded_score =graded_score;
        this.observation = observation;
    }
}