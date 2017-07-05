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
    templateUrl: 'app/professor/createquiz/sa-quiz.component.html'
})

export class SAQuizComponent implements OnInit {
    ngOnInit(): void {
        // this.quiz = new SAQuiz();
        // this.quiz.setTopic("abc");
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        console.log(this.userid);
        this.quiz = new SAQuiz([], "CS", "SINGLE_ANSWER", false, 0, 1, this.userid);
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
        this.options = new Array();
        this.options.push(1);
        this.options.push(2);
        this.options.push(3);
        this.options.push(4);


    }
    options: Array<number>;

    wasNotSaved = true;
    userid: string;
    quiz: SAQuiz;;
    tempQ: QuestionCreatedwithAnswer;
    tempO1: QuestionOptions;
    tempO2: QuestionOptions;
    tempO3: QuestionOptions;
    tempO4: QuestionOptions;
    tempCorrectAnswer: number;
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
        this.qoList.push(this.tempO1);
        this.qoList.push(this.tempO2);
        this.qoList.push(this.tempO3);
        this.qoList.push(this.tempO4);
        console.log("the list is", this.qoList);
        this.tempQ.questionOptions = this.qoList;
        var cAnswers: number[] = [];
        cAnswers.push(this.tempCorrectAnswer);
        this.tempQ.correctAnswers = cAnswers;
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






}