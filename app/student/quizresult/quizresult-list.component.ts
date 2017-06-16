import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user/user';
import { QuizServiceComponent } from '../../service/quiz/quiz-service.component';
import { QuizRequest} from '../../models/quiz/QuizRequest';
import {QuizStudentResultResponse} from '../../models/quiz/QuizStudentResultResponse'

@Component({
    templateUrl : 'app/student/quizresult/quizresult.list.component.html'
})
export class QuizResultListComponent implements OnInit {
        ngOnInit(): void {
            this.results = new Array();
            let tempUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(tempUser);
            this.userid = tempUser.username;
            this.getAllQuizesResults();
            
        }
    isDataAvailable: boolean = false;
    wasNotSaved = true;
    userid:string;
    results: QuizStudentResultResponse[];
    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizServiceComponent
  ){}

  getAllQuizesResults(){
      this.quizService.getAllQuizResultForAStudent(this.userid).subscribe(results =>{
       this.results = results;
       console.log("results loaded", this.results);
       this.isDataAvailable = true;
},
      err => console.log("error fetchig quizes"));
  }

}