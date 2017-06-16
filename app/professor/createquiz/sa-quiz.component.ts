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



    }
    wasNotSaved = true;
    userid: string;
    quiz: SAQuiz;;
    tempQ: QuestionCreatedwithAnswer;
    tempO1: QuestionOptions;
    tempO2: QuestionOptions;
    tempO3: QuestionOptions;
    tempO4: QuestionOptions;
    tempCorrectAnswer: string;
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
        this.qoList.push(this.tempO1);
        this.qoList.push(this.tempO2);
        this.qoList.push(this.tempO3);
        this.qoList.push(this.tempO4);
        console.log("the list is", this.qoList);
        this.tempQ.questionOptions = this.qoList;
        var cAnswers: number[] = [];
        this.tempCorrectAnswer.split(",").forEach(function (answerOption) {
            cAnswers.push(parseInt(answerOption));
        });
        this.tempQ.correctAnswers = cAnswers;
        this.quiz.questionCreatedWithAnswers.push(this.tempQ);
        console.log(this.quiz);
        this.nrOfQuestions +=1 ;
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
        this.quizService.saveQuiz(this.quiz);
        this.wasNotSaved = false;
        this.router.navigate(['/professor']);
    }






}