import { Answer } from './Answer'

export class QuizResponseRequest {
    id: number;
    userId: string;
    quizId: number;
    answerList: Answer[];
    time: number;

    constructor(
        id?: number,
        userId?: string,
        quizId?: number,
        answerList?: Answer[],
        time?: number
    ) {
        this.id= id;
        this.userId = userId;
        this.quizId = quizId;
        this.answerList = answerList;
        this.time = time;
    }
}