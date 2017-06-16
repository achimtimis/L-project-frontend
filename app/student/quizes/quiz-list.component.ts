import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest} from '../../models/quiz/QuizRequest'

@Component({
    selector: 'student-quiz-list',
    templateUrl : 'app/student/quizes/quiz-list.component.html'
})
export class QuizListComponent implements OnInit {
        ngOnInit(): void {
            this.quizes = new Array();
            this.getAllQuizes();
        }

    quizes: QuizRequest[];
    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizServiceComponent
  ){}

  getAllQuizes(){
      this.quizService.getAllQuizes().subscribe(quizes => this.quizes = quizes,
      err => console.log("error fetchig quizes"));
  }

}