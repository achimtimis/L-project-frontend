import {QuestionOptions} from './QuestionOptions'

export class Question{
    id:number;
    questionText: string;
    questionOptions : QuestionOptions[];
    chosenAnswer : number[];
    isInput : boolean;
    score : number;
    inputField : string;
    
    constructor(questionText?: string, questionOptions?: QuestionOptions[],chosenAnswer?: number[],isInput?: boolean,score?: number){
        this.questionText = questionText;
        this.questionOptions = questionOptions;
        this.chosenAnswer = chosenAnswer;
        this.isInput = isInput;
        this.score = score;
    }
}