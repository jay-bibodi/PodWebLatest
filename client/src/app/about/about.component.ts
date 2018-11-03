import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner'
import {Global} from '../global';


@Component({
    selector: 'app-about-cmp',
    templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit, OnDestroy {
    test: Date = new Date();

    constructor(private router: Router,private spinner:NgxSpinnerService) { }

    ngOnInit() {
    this.spinner.show();
      const body = document.getElementsByTagName('body')[0];
      //body.classList.add('lock-page');
      body.classList.add('off-canvas-sidebar');
      const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.spinner.hide();
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      //body.classList.remove('lock-page');
      body.classList.remove('off-canvas-sidebar');
    }

    loadLoginComponent(){
        this.router.navigateByUrl('/pages/login');
    }

    loadRegisterComponent(){
        this.router.navigateByUrl('/pages/register');
    }
}