import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../models/quiz/QuizRequest'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'student-quiz-list',
    templateUrl: 'app/student/quizes/quiz-list.component.html'
})
export class QuizListComponent implements OnInit {
    ngOnInit(): void {
        this.quizes = new Array();
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.getAllQuizes();
        setTimeout(function () { }, 1000);

    }
    isDataAvailable:boolean = false;
    userid: string;
    quizes: QuizRequest[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent,
    ) { 
    }

    getAllQuizes() {
        this.quizService.getAllQuizes(this.userid).subscribe(quizes => {
            this.quizes = quizes;
            this.isDataAvailable =true;
        },
            err => console.log("error fetchig quizes"));
    }

    getQuiz(quiz_id: number) {
        console.log("clicked on quizid:", quiz_id);
        this.router.navigate(['/quiz'], { queryParams: { quiz_id: quiz_id } });
    }

}