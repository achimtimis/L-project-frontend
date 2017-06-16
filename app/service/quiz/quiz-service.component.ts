import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SAQuiz } from '../../models/quiz/SAQuiz';
import {QuizRequest} from '../../models/quiz/QuizRequest';
import {QuizResponseRequest} from '../../models/quiz/QuizResponseRequest'
import {QuizStudentResultResponse} from '../../models/quiz/QuizStudentResultResponse'

import 'rxjs/add/operator/map'
@Injectable()
export class QuizServiceComponent {
    constructor(private http: Http) { }

    saveQuiz(quiz: SAQuiz) {
        let params: URLSearchParams = new URLSearchParams();
        // params.set('username', username);
        // params.set('password', password);
        console.log("executing post with", quiz);
        this.http.post('http://localhost:8002/quizes', quiz, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .map(res => res.json()).subscribe();
        // login successful if there's a jwt token in the response
        // let user = response.json();
        // if (user /*&& user.token*/) {  //TODO: manage user token.
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   localStorage.setItem('currentUser', JSON.stringify(user));
        // }
    }

    getAllQuizes(userid:string): Observable<QuizRequest[]>{
        return this.http.get('http://localhost:8002/quizes/'+userid, { headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.json());

    }

    getQuizByid(quiz_id:number){
        var url = 'http://localhost:8002/quiz/'+ quiz_id;
        return this.http.get(url, { headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.json());
    }

    saveQuizResponse(quizResponse:QuizResponseRequest){
        var url = 'http://localhost:8002/quiz/response';
        this.http.post(url, quizResponse, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .map(res => res.json()).subscribe();
    }
    getAllQuizResultForAStudent(student_id:string): Observable<QuizStudentResultResponse[]>{
        var url = 'http://localhost:8002/quiz/result/' + student_id;
        return this.http.get(url, { headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.json());
    }

}
