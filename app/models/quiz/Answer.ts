

export class Answer {
    id: number;
    questionId: number;
    questionText: string;
    userId: string;
    chosenOptions: number[];
    inputResponse: string;
    constructor(
        id?: number,
        questionId?: number,
        questionText?: string,
        userId?: string,
        chosenOptions?: number[],
        inputResponse?: string,
    ) {
        this.id = id;
        this.questionId = questionId;
        this.questionText = questionText;
        this.userId = userId;
        this.chosenOptions = chosenOptions;
        this.inputResponse = inputResponse;
    }
}