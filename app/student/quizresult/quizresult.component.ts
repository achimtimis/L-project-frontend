import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest} from '../../models/quiz/QuizRequest'

@Component({
    selector: 'student-quiz-result',
    templateUrl : 'app/student/quizresult/quizresult.component.html'
})
export class QuizResultComponent implements OnInit {
        ngOnInit(): void {
            this.quizes = new Array();
            let tempUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(tempUser);
            this.userid = tempUser.username;
            this.getAllQuizes();
            
        }
    userid:string;
    quizes: QuizRequest[];
    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizServiceComponent
  ){}

  getAllQuizes(){
      this.quizService.getAllQuizes(this.userid).subscribe(quizes => this.quizes = quizes,
      err => console.log("error fetchig quizes"));
  }

  getQuiz(quiz_id:number){
      console.log("clicked on quizid:", quiz_id);
      this.router.navigate(['/quiz'], { queryParams: { quiz_id: quiz_id } });
  }

}