import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { AuthenticationService } from '../../login/login.service';
import { SAQuiz } from '../../models/quiz/SAQuiz';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';

import { QuestionCreatedwithAnswer } from '../../models/quiz/QuestionCreatedWithAnswer'
import { QuestionOptions } from '../../models/quiz/QuestionOptions'
@Component({
    templateUrl: 'app/professor/createquiz/ma-quiz.component.html'
})

export class MAQuizComponent implements OnInit {
    ngOnInit(): void {
        // this.quiz = new SAQuiz();
        // this.quiz.setTopic("abc");
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        console.log(this.userid);
        this.quiz = new SAQuiz([], "CS", "MULTIPLE_ANSWERS", false, 0, 1, this.userid);
        this.tempQ = new QuestionCreatedwithAnswer();
        this.tempO1 = new QuestionOptions();
        this.tempO1.key = 1;
        this.tempO2 = new QuestionOptions();
        this.tempO2.key = 2;
        this.tempO3 = new QuestionOptions();
        this.tempO3.key = 3;
        this.tempO4 = new QuestionOptions();
        this.tempO4.key = 4;
        this.qoList = new Array();
        this.tempQ = new QuestionCreatedwithAnswer();
        this.tempCorrectAnswers = [];


    }
    v:boolean = false;
    wasNotSaved = true;
    userid: string;
    quiz: SAQuiz;;
    tempQ: QuestionCreatedwithAnswer;
    tempO1: QuestionOptions;
    tempO2: QuestionOptions;
    tempO3: QuestionOptions;
    tempO4: QuestionOptions;
    tempO1value = false;
    tempO2value = false;
    tempO3value = false;
    tempO4value = false;
    tempCorrectAnswers: number[];
    nrOfQuestions = 0;
    totalScore = 0;
    public qoList: QuestionOptions[] = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }
    setTopic() {

        this.quiz.setTopic("abc");
    }

    addQuestion() {
        if (isNaN(this.tempQ.score)) {
            alert("The Score must be a valid number!");
            return;
        }
        if (this.tempCorrectAnswers.length == 0){
            alert("please select at least one correct option");
            return;
        }
        this.qoList.push(this.tempO1);
        this.qoList.push(this.tempO2);
        this.qoList.push(this.tempO3);
        this.qoList.push(this.tempO4);
        console.log("the list is", this.qoList);
        this.tempQ.questionOptions = this.qoList;
        var c = this.tempCorrectAnswers;
        this.tempQ.correctAnswers = c;
        this.tempCorrectAnswers = [];
        this.quiz.questionCreatedWithAnswers.push(this.tempQ);
        console.log(this.quiz);
        this.nrOfQuestions += 1;
        this.totalScore += +this.tempQ.score;
        this.tempQ = new QuestionCreatedwithAnswer();
        this.tempO1 = new QuestionOptions();
        this.tempO1.key = 1;
        this.tempO2 = new QuestionOptions();
        this.tempO2.key = 2;
        this.tempO3 = new QuestionOptions();
        this.tempO3.key = 3;
        this.tempO4 = new QuestionOptions();
        this.tempO4.key = 4;
        this.qoList = new Array();
        this.tempO1value = false;
        this.tempO2value = false;
        this.tempO3value = false;
        this.tempO4value = false;
    }

checkBoxChange(number:number, isChecked: boolean) {

  if(isChecked) {
    this.tempCorrectAnswers.push(number);
  } else {
    let index = this.tempCorrectAnswers.findIndex(x => x == number);
    this.tempCorrectAnswers.splice(index, 1);
  }
  console.log("checked " , this.tempCorrectAnswers);
}


    getFormState() {
        return this.wasNotSaved;
    }
    createNewQuiz() {
        console.log("fkin forms");
        if (isNaN(this.quiz.minScoreToPass)) {
            alert("The Minimum score to pass must be a valid number!");
            return;
        }
        if (isNaN(this.quiz.timer)) {
            alert("The timer must be a valid number!");
            return;
        }
        if (!this.quiz.name || this.quiz.name === "") {
            alert("Quiz name must not be empty");
            return;
        }
        if (this.quiz.questionCreatedWithAnswers.length <= 0) {
            alert("Please add at least one question");
            return;
        }
        this.quizService.saveQuiz(this.quiz);
        this.wasNotSaved = false;
        this.router.navigate(['/professor']);
    }






}