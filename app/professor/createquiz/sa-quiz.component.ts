import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { AuthenticationService } from '../../login/login.service';
import {SAQuiz} from '../../models/quiz/SAQuiz'

import {QuestionCreatedwithAnswer} from '../../models/quiz/QuestionCreatedWithAnswer'
import {QuestionOptions} from '../../models/quiz/QuestionOptions'
@Component({
    templateUrl : 'app/professor/createquiz/sa-quiz.component.html'
})

export class SAQuizComponent implements OnInit {
        ngOnInit(): void {
            // this.quiz = new SAQuiz();
            // this.quiz.setTopic("abc");
            let tempUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(tempUser);
            this.userid = tempUser.username;
            console.log(this.userid);
            this.quiz = new SAQuiz([],"art", "SINGLE_ANSWER", false, 0, 1, this.userid);
            this.tempQ = new QuestionCreatedwithAnswer();
            this.tempO1 = new QuestionOptions();
            this.tempO1.key  = 1;
            this.tempO2 = new QuestionOptions();
            this.tempO2.key = 2;
            this.tempO3 = new QuestionOptions();
            this.tempO3.key = 3;
            this.tempO4 = new QuestionOptions();
            this.tempO4.key = 4;
            this.qoList = new Array();



        }
    wasNotSaved= true;
    userid : string;
    quiz: SAQuiz;
    noQuestions  = 10;
    tempQ : QuestionCreatedwithAnswer;
    tempO1 : QuestionOptions;
    tempO2 : QuestionOptions;
    tempO3 : QuestionOptions;
    tempO4 : QuestionOptions;
    tempCorrectAnswer :string;
    public qoList : QuestionOptions[] = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
  ){}
    setTopic(){
        
        this.quiz.setTopic("abc");
    }

    addQuestion(){
        this.qoList.push(this.tempO1);
        this.qoList.push(this.tempO2);
        this.qoList.push(this.tempO3);
        this.qoList.push(this.tempO4);
        console.log("the list is", this.qoList);
        this.tempQ.questionOptions = this.qoList;
        var cAnswers: number[] = [];
        this.tempCorrectAnswer.split(",").forEach(function(answerOption) {
            cAnswers.push(parseInt(answerOption));
        });
        this.tempQ.correctAnswers = cAnswers;
        this.quiz.questionCreatedWithAnswers = [this.tempQ];
        console.log(this.quiz);
    }

    getFormState(){
        return this.wasNotSaved;
    }
    createNewQuiz(){
        this.wasNotSaved = false;
    }





  
}