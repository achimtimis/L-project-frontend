import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../models/quiz/QuizRequest'
import { QuizToCorrectRequest } from '../../models/quiz/QuizToCorrectRequest'
import { QuizStudentResultResponse } from '../../models/quiz/QuizStudentResultResponse'


@Component({
    templateUrl: 'app/professor/quizresults/quizresults-list.component.html'
})
export class QuizResultsListComponent implements OnInit {
    ngOnInit(): void {
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.results = new Array();
        this.getAllQuizResults();
    }

    userid: string;
    isDataAvailable: boolean = false;
    results: QuizStudentResultResponse[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }

    getAllQuizResults() {
        this.quizService.getAllQuizesResults(this.userid).subscribe(results => {
            this.results = results;
            this.isDataAvailable = true;
            console.log("got list of results", this.results);
    },
            err => {
                alert("error!")
                console.log("error fetchig quizes to grade");
    }
            );
    }

}