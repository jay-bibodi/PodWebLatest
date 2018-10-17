import { Component, OnInit, ElementRef, OnDestroy,Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    @Input('ngModel')
    model: any = {};

    constructor(private element: ElementRef,private http: Http,private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }

    login(){
        console.log(this.model);
        this.http.post('http://localhost:3000/login', this.model).subscribe((data) => {
        console.log("message sending results", data); 
        var body = JSON.parse(data.text());
        localStorage.setItem('emailAddress',body.emailAddress);
        localStorage.setItem("token",body.token); 
        /*console.log(data.text());
        var body = JSON.parse(data.text());
        console.log(body.emailAddress);
        console.log(body.token);
        localStorage.setItem('emailAddress',body.emailAddress);
        localStorage.setItem("token",body.token); 
        swal({
            title: "Successfully Registered",
            text: "",
            timer: 3000,
            showConfirmButton: false
        }).catch(swal.noop)  */      
        this.router.navigateByUrl('/tables/latestPodcast');
        }, (err) => { console.log("message sending err", err) }, () => {})
    }
}