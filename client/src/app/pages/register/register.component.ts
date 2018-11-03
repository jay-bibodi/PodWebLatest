import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import {Global} from '../../global';

@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
  test: Date = new Date();

  @Input('ngModel')
  model: any = {};
  loading = false;
  registerSuccessful = false;

  constructor(private http: Http, private router: Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }

  register() {
    this.spinner.show();
    this.loading = true;
    this.http.post(Global.API_ENDPOINT+'/signup', this.model).subscribe((data) => {
      var body = JSON.parse(data.text());
      localStorage.setItem("emailAddress", body.emailAddress);
      localStorage.setItem("token", body.token);
      this.spinner.hide();
      this.router.navigateByUrl('/tables/latestPodcast');
    }, (err) => { 
      this.spinner.hide();
      swal({
        title: "Something went wrong!",
        text: "Please try again or contact system administrator!",
        timer: 3000,
        showConfirmButton: false
      }).catch(swal.noop)
    })
  }
}