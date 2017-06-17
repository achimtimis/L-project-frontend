import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user/user';
import { Question } from '../../../models/quiz/Question'
import { Answer } from '../../../models/quiz/Answer'
import { QuizServiceComponent } from '../../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../../models/quiz/QuizRequest'
import {QuizResponseRequest} from '../../../models/quiz/QuizResponseRequest'
import {Observable} from 'rxjs/Rx';


@Component({
    templateUrl: 'app/student/quizes/quizresponse/quiz-response.component.html'
})
export class QuizResponseComponent implements OnInit {

    quiz: QuizRequest;
    quiz_id: string;
    isDataAvailable: boolean = false;
    wasNotSaved: boolean = true;
    timer: number;
    response: QuizResponseRequest;
    userid:string;
    tempChosenOpt: string;
    ngOnInit(): void {
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.quiz_id = params['quiz_id'] || 0;
            });
            this.getQuiz();
            this.response = new QuizResponseRequest();
            

    }
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent,
    ) { }




    getQuiz() {
        this.quizService.getQuizByid(parseInt(this.quiz_id)).subscribe(quiz => {
            console.log("data available", this.isDataAvailable),
            this.quiz = quiz;
            this.checkQuizType();
            console.log("data available", this.quiz)
        },
            err => console.log("error occured", err));
    }
    checkQuizType() {
        if (this.quiz.isTimed){
            this.timer = this.quiz.timer;
        }
        this.isDataAvailable = true;        
    }

    submitResponse() {
        console.log("form submitted");
        this.mapResponseObject();
        this.quizService.saveQuizResponse(this.response);
        this.wasNotSaved = false;
        this.router.navigate(["/student"]);
    }

    getFormState() {
        return this.wasNotSaved;
    }

    mapResponseObject(){
        this.response.quizId = this.quiz.quiz_id;
        this.response.time = this.timer;
        this.response.userId = this.userid;
        var answers:Answer[] = new Array();
        var chosenOpt:number[] = new Array();
        for(var a =0; a<this.quiz.questions.length;a++){
            let aa:Question = this.quiz.questions[a];
            var toAdd = new Answer();
            // toAdd.questionId = a["questionId"];
            // toAdd.questionText = a["questionText"];
            // toAdd.inputResponse = a["inputResponse"];
            // toAdd.userId = this.userid;
            // toAdd.chosenOptions = a["chosenOptions"];
            toAdd.questionId = aa.questionId;
            toAdd.questionText = aa.questionText;
            toAdd.inputResponse = aa.inputField;
            toAdd.userId = this.userid;
            aa.chosenAnswer;
            toAdd.chosenOptions = [aa.chosenAnswer[0]] ;
            answers.push(toAdd);
        }
        console.log("finished list", answers);
        this.response.answerList = answers;
        console.log("finished response obj", this.response);
    }
    timerTic(){
        Observable.interval(1000)
              .map((x) => this.timer = this.timer - 1)
              .subscribe((x) => {
                  if (this.timer == 15){
                      alert("You have 15 seconds left");
                  }else if (this.timer == 0){
                      this.wasNotSaved = false;
                      alert("Time is up!");
                      //todo send quiz failed to the backend
                      this.quizService.sendQuizFailedEvent(this.userid, parseInt(this.quiz_id));
                      this.router.navigate(["student"]);
                  }
              });
    }
}