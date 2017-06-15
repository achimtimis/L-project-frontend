import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SAQuiz } from '../../models/quiz/SAQuiz';

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
            );
    }
}