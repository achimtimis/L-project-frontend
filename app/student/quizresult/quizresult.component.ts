import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../models/quiz/QuizRequest'
import { QuizStudentResultResponse } from '../../models/quiz/QuizStudentResultResponse'

@Component({
    selector: 'student-quiz-result',
    templateUrl: 'app/student/quizresult/quizresult.component.html'
})
export class QuizResultComponent implements OnInit {
    ngOnInit(): void {
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.result_id = params['result_id'] || 0;
            });
        this.getQuiz();
    }
    userid: string;
    result_id: number;
    result: QuizStudentResultResponse;
    isDataAvailable: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }

    getQuiz() {
        this.quizService.getQuizResultForAStudentById(this.userid, this.result_id)
            .subscribe(result => {
                this.result = result;
                this.isDataAvailable = true;
      },
            err => console.log("error fetchig result"));
    }

}