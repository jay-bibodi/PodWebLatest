import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Global } from '../../global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    
    model: any = {};
    loading = false;

    constructor(private http: Http,private router: Router) { }

    loadRegisterComponent(){
        this.router.navigateByUrl('/signup');
    }

    ngOnInit() {}

    login(){
        console.log(this.model);
        this.loading = true;
        this.http.post('http://localhost:3000/login', this.model).subscribe((data) => {
                console.log("message sending results", data);  
              }, (err) => { console.log("message sending err", err) }, () => { })
        /*this.http.post(Global.API_ENDPOINT+'/login', this.model).subscribe((data) => {
                console.log("message sending results", data);  
            }, (err) => { console.log("message sending err", err) }, () => { })*/
    }
}