export class QuestionOptions{

    key: number;
    value: string;
    checked: boolean;
    constructor(key?:number, value?:string, checked?: boolean){
        this.key = key;
        this.value = value;
        this.checked = checked;
    }
    
}