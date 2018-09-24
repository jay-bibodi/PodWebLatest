import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Global } from '../../global';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    model: any = {};
    loading = false;

    constructor(private http: Http,private router: Router) { }

    ngOnInit() {}

    loadLoginComponent(){
        this.router.navigateByUrl('/home');
    }

    register(){
        console.log(this.model);
        this.loading = true;
        /*this.http.post('http://localhost:3000/signup', this.model).subscribe((data) => {
                console.log("message sending results", data);  
              }, (err) => { console.log("message sending err", err) }, () => { })*/
        this.http.post(Global.API_ENDPOINT+'/signup', this.model).subscribe((data) => {
                console.log("message sending results", data);  
            }, (err) => { console.log("message sending err", err) }, () => { })      
      }
}