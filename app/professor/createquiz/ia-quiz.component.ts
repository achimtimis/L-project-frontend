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
    templateUrl: 'app/professor/createquiz/ia-quiz.component.html'
})

export class IAQuizComponent implements OnInit {
    ngOnInit(): void {
        // this.quiz = new SAQuiz();
        // this.quiz.setTopic("abc");
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        console.log(this.userid);
        this.quiz = new SAQuiz([], "CS", "INPUT_QUESTION", false, 0, 1, this.userid);
        this.tempQ = new QuestionCreatedwithAnswer();
        this.qoList = new Array();



    }
    wasNotSaved = true;
    userid: string;
    quiz: SAQuiz;;
    tempQ: QuestionCreatedwithAnswer;
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
        if (isNaN(this.tempQ.score)) {
            alert("The Score must be a valid number!");
            return;
        }
        console.log("the list is", this.qoList);
        this.tempQ.questionOptions = new Array()
        this.tempQ.correctAnswers = new Array();;
        this.quiz.questionCreatedWithAnswers.push(this.tempQ);
        console.log(this.quiz);
        this.nrOfQuestions += 1;
        this.totalScore += +this.tempQ.score;
        this.tempQ = new QuestionCreatedwithAnswer();
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