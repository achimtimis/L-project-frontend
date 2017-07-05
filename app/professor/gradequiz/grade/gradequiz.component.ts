import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user/user';
import { QuizServiceComponent } from '../../../service/quiz/quiz-service.component';
import { QuizRequest } from '../../../models/quiz/QuizRequest'
import { QuizToCorrectRequest } from '../../../models/quiz/QuizToCorrectRequest'
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: 'app/professor/gradequiz/grade/gradequiz.component.html'
})
export class GradeQuizComponent implements OnInit {
    ngOnInit(): void {
        let tempUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(tempUser);
        this.userid = tempUser.username;
        this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.result_id = params['response_id'] || 0;
            });
        this.getQuiz();
        this.updateScore();
    }
    totalScore:number = 0;
    userid: string;
    result_id: number;
    result: QuizToCorrectRequest;
    isDataAvailable: boolean = false;
    wasNotSaved: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private quizService: QuizServiceComponent
    ) { }

    getQuiz() {
        this.quizService.getQuizToGradeByResponseId(this.result_id)
            .subscribe(result => {
                this.result = result;
                this.isDataAvailable = true;
                console.log("got the result", this.result);
      },
            err => console.log("error fetchig result"));
    }
    submitResponse(){
        delete this.result["passed"];
        console.log("the post object is ", this.result);
        this.result.score = this.totalScore;
        console.log("computed score is", this.result.score);
        if (this.result.score >= this.result.minScoreToPass){
            this.result.isPassed = true;
            console.log("on passed");
        }else{
            console.log("wrong computation");
            this.result.isPassed = false;
        }
    
        this.quizService.saveQuizResult(this.result);
        this.wasNotSaved = false;
        this.router.navigate(['/professor']);
    }

    updateScore(){
        Observable.interval(1000)
              .map((x) => {
                  var score:number = 0;
                  this.result.answerList.forEach(a => {
                      if (!isNaN(a.graded_score)){
                      score += +a.graded_score;
                  }
                });
                this.totalScore = score;
                      
              })
              .subscribe((x) => {
                  if (this.wasNotSaved == false){
                      return;
                  }
              });
    }

   


}