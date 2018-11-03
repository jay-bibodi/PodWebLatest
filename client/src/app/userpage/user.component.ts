import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Global } from '../global';

@Component({
    selector: 'app-user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    userToken: string;
    userName: string;
    userEmail: string;
    userSecondaryEmail: string;
    userAddress: string;
    userCity: string;
    userCountry: string;
    userPostalCode: string;
    userObject = null;
    disableEmailAddress = true;
    disableToken = true;
    isNamePresent = true;
    valuesAltered = false;

    constructor(private http: Http,private router: Router,private spinner:NgxSpinnerService){}

    ngOnInit() {
        this.spinner.show();
        let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.http.get(Global.API_ENDPOINT+'/getUserInfo',{headers: headers}).subscribe((data) => {
            this.userObject = data.json();
            this.userObject = this.userObject.data
            
            this.userToken = this.userObject.token;
            this.userName = this.userObject.name;
            this.userEmail = this.userObject.emailAddress;
            this.userSecondaryEmail = this.userObject.secondaryEmailAddress;
            this.userAddress = this.userObject.userAddress;
            this.userCity = this.userObject.city;
            this.userCountry = this.userObject.country;
            this.userPostalCode = this.userObject.postalCode;
            this.spinner.hide();
        }, (err) => { 
            localStorage.removeItem("token");
            localStorage.removeItem("emailAddress");
            this.spinner.hide();
            swal({
                title: "Invalid login credentials. Please login again!",
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(swal.noop)
            this.router.navigateByUrl('/');
        })        
    }

    loadLatestPodcast(){
        this.router.navigateByUrl('/tables/latestPodcast');
    }

    editUserProfile(form){
        if(this.valuesAltered){

            if(form.userName !== undefined && (form.userName).trim().length > 0)
            {
                this.isNamePresent= true;
                form.userName = form.userName.trim();
                form.userAddress = form.userAddress.trim();
                form.userCity = form.userCity.trim();
                form.userCountry = form.userCountry.trim();
                form.userPostalCode = form.userPostalCode.trim();
                form.userSecondaryEmail = form.userSecondaryEmail.trim();

                this.spinner.show();
                let headers = new Headers();
                headers.append("token",localStorage.getItem("token")); 
                headers.append("emailAddress",localStorage.getItem("emailAddress"));

                this.http.post(Global.API_ENDPOINT+'/updateUserDetails', form,{headers: headers}).subscribe((data) => {
                    this.spinner.hide();
                    var body = JSON.parse(data.text());
                    swal({
                        title: body.status,
                        text: "",
                        timer: 2000,
                        showConfirmButton: false
                    }).catch(swal.noop);
                }, (err) => { 
                    this.spinner.hide();
                    var body = JSON.parse(err.text());
                    swal({
                        title: body.status,
                        text: "",
                        timer: 2000,
                        showConfirmButton: false
                    }).catch(swal.noop);
                })
            }
            else
            {
                this.isNamePresent= false;
            }
        }
        else{
            this.valuesAltered = false;
        }
    }

    mark_changed()
    {
        this.valuesAltered = true;
    }
}