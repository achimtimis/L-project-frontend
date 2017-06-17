import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../models/quiz/QuizRequest'
import { QuizToCorrectRequest } from '../../models/quiz/QuizToCorrectRequest'


@Component({
    templateUrl: 'app/professor/gradequiz/grade-quiz.list.component.html'
})
export class GradeQuizListComponent implements OnInit {
    ngOnInit(): void {
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.responses = new Array();
        this.getAllQuizResponses();
    }

    userid: string;
    isDataAvailable: boolean = false;
    responses: QuizToCorrectRequest[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }

    getAllQuizResponses() {
        this.quizService.getAllQuizesToCorrect(this.userid).subscribe(responses => {
            this.responses = responses;
            this.isDataAvailable = true;
            console.log("got list of responses", this.responses);
    },
            err => {
                alert("error!")
                console.log("error fetchig quizes to grade");
    }
            );
    }

    gradeResponse(response_id:number){
        this.router.navigate(['/professor/tograde/response'], { queryParams: { response_id: response_id } });
    }

}