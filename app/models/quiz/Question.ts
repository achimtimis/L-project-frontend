import {QuestionOptions} from './QuestionOptions'

export class Question{
    id:number;
    questionText: string;
    questionId: number;
    questionOptions : QuestionOptions[];
    chosenAnswer : number[];
    isInput : boolean;
    score : number;
    inputField : string;
    
    constructor(id?:number,questionId?:number,questionText?: string, questionOptions?: QuestionOptions[],chosenAnswer?: number[],isInput?: boolean,score?: number){
        this.id = id;
        this.questionId= questionId;
        this.questionText = questionText;
        this.questionOptions = questionOptions;
        this.chosenAnswer = chosenAnswer;
        this.isInput = isInput;
        this.score = score;
    }
}