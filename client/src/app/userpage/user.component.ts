import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import swal from 'sweetalert2';

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

    constructor(private http: Http,private router: Router){}

    ngOnInit() {
        let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.http.get('http://localhost:3000/getUserInfo',{headers: headers}).subscribe((data) => {
            console.log("message sending results", data); 
            this.userObject = data.json();
            this.userObject = this.userObject.data
            
            console.log(this.userObject);
            this.userToken = this.userObject.token;
            this.userName = this.userObject.name;
            this.userEmail = this.userObject.emailAddress;
            this.userSecondaryEmail = this.userObject.secondaryEmailAddress;
            this.userAddress = this.userObject.userAddress;
            this.userCity = this.userObject.city;
            this.userCountry = this.userObject.country;
            this.userPostalCode = this.userObject.postalCode;
            //console.log(data.text());
            /*var dataFromS = JSON.parse(JSON.stringify(data.text()));
            console.log(dataFromS);
            this.userToken = dataFromS.data.token;
            this.userName = dataFromS.data.name;
            this.userEmail = dataFromS.data.emailAddress;
            this.userSecondaryEmail = dataFromS.data.secondaryEmailAddress;
            this.userAddress = dataFromS.data.address;
            this.userCity = dataFromS.data.city;
            this.userCountry = dataFromS.data.country;
            this.userPostalCode = dataFromS.data.postalCode;*/
        }, (err) => { 
            console.log("message sending err", err);
            localStorage.removeItem("token");
            localStorage.removeItem("emailAddress");
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
            console.log(form);
            console.log((form.userName).trim().length)
            if(form.userName !== undefined && (form.userName).trim().length > 0)
            {
                this.isNamePresent= true;
                form.userName = form.userName.trim();
                form.userAddress = form.userAddress.trim();
                form.userCity = form.userCity.trim();
                form.userCountry = form.userCountry.trim();
                form.userPostalCode = form.userPostalCode.trim();
                form.userSecondaryEmail = form.userSecondaryEmail.trim();

                let headers = new Headers();
                headers.append("token",localStorage.getItem("token")); 
                headers.append("emailAddress",localStorage.getItem("emailAddress"));

                this.http.post('http://localhost:3000/updateUserDetails', form,{headers: headers}).subscribe((data) => {
                    console.log("message sending results", data); 
                    var body = JSON.parse(data.text());
                    swal({
                        title: body.status,
                        text: "",
                        timer: 3000,
                        showConfirmButton: false
                    }).catch(swal.noop);
                }, (err) => { console.log("message sending err", err) })
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