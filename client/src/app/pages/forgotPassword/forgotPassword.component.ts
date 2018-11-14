import { Component, OnInit, ElementRef, OnDestroy,Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {Global} from '../../global';
import swal from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-forgotPassword-cmp',
    templateUrl: './forgotPassword.component.html'
})

export class ForgotPasswordComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    @Input('ngModel')
    model: any = {};

    constructor(private element: ElementRef,private http: Http,private router: Router,private spinner: NgxSpinnerService) {
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

    forgotPassword(){
        console.log("Inside forgotPassword");
        this.spinner.show();
        this.http.post(Global.API_ENDPOINT+'/forgotPassword', this.model).subscribe((data) => {
        var body = JSON.parse(data.text());
        swal({
            title: body.status,
            text: "",
            timer: 3000,
            showConfirmButton: false
          }).catch(swal.noop)  
        this.spinner.hide();
        }, (err) => { 
            var body = JSON.parse(err.text());
            this.spinner.hide();
            swal({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
              }).catch(swal.noop)  
        })
    }
}