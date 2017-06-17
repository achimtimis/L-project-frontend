import {QuestionCreatedwithAnswer} from './QuestionCreatedWithAnswer'
export class SAQuiz {

    questionCreatedWithAnswers : QuestionCreatedwithAnswer[];
    topic: string;
    quizType: string;
    isTimed: boolean;
    timer:number;
    minScoreToPass:number;
    creatorId:string;
    name:string;


    constructor(questionCreatedWithAnswers?:QuestionCreatedwithAnswer[],topic?: string,quizType?: string,
    isTimed?: boolean,timer?:number,minScoreToPass?:number,
    creatorId?:string,name?:string){
        this.questionCreatedWithAnswers = questionCreatedWithAnswers;
        this.topic = topic;
        this.quizType= quizType;
        this.isTimed = isTimed;
        this.timer = timer;
        this.minScoreToPass = minScoreToPass;
        this.creatorId = creatorId;
        this.name = name;
    }

    set setTopic(topic:any){
        this.topic = topic;
    }
    


}