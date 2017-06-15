import {QuestionOptions} from './QuestionOptions'

export class QuestionCreatedwithAnswer{
    questionText: string;
    questionOptions : QuestionOptions[];
    correctAnswers : number[];
    isInput : boolean;
    score : number;

    constructor(questionText?: string, questionOptions?: QuestionOptions[],correctAnswers?: number[],isInput?: boolean,score?: number){
        this.questionText = questionText;
        this.questionOptions = questionOptions;
        this.correctAnswers = correctAnswers;
        this.isInput = isInput;
        this.score = score;
    }

}