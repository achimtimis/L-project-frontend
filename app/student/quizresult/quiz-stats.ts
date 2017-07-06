import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../models/quiz/QuizRequest'
import { QuizStudentResultResponse } from '../../models/quiz/QuizStudentResultResponse'

@Component({
    selector: 'student-stats',
    templateUrl: 'app/student/quizresult/quiz-stats.html'
})
export class StudentQuizStats {
    userid: string;
    result_id: number;
    result: QuizStudentResultResponse;
    isDataAvailable: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }
}