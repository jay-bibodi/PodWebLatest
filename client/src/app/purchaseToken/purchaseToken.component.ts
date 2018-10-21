import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import swal from 'sweetalert2';

declare const require: any;

declare const $: any;

@Component({
    selector: 'app-purchaseToken-cmp',
    templateUrl: 'purchaseToken.component.html',
    styles: [`md-calendar {
      width: 300px;
  }`]
})

export class PurchaseTokenComponent implements OnInit {
  amount = true;
  constructor(private http: Http,private router: Router){}

  tokenList: null;/*[
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'},
    {value: '75', viewValue: '75'},
    {value: '100', viewValue: '100'}
  ];*/
  amountForTokenSelected: string;

    ngOnInit() {
      let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.http.get('http://localhost:3000/getTokenList',{headers: headers}).subscribe((data) => {
            console.log("message sending results", data); 
            this.tokenList = data.json().data
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
      });
    }
    myFunc(val: any) {
        // code here
    }

    selectedToken(value){
      console.log("Inside selected Token");
      console.log(value);
      let headers = new Headers();
      headers.append("token",localStorage.getItem("token")); 
      headers.append("emailAddress",localStorage.getItem("emailAddress"));

      this.http.post('http://localhost:3000/getAmountForTokenValue', {"totalToken":value},{headers: headers}).subscribe((data) => {
          console.log("message sending results", data); 
          var body = JSON.parse(data.text());
          console.log(body);
          this.amountForTokenSelected = body.data;
          console.log(this.amountForTokenSelected);
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

    purchaseTokenForm(){
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_CoMBkQnIgd8vejmt3EsQTasU',
            locale: 'auto',
            token: function (token: any) {
                console.log(token);
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                let headers = new Headers();
                headers.append("token",localStorage.getItem("token")); 
                headers.append("emailAddress",localStorage.getItem("emailAddress"));

                this.http.post('http://localhost:3000/stripePurchaseToken',token,{headers: headers}).subscribe((data) => {
                    console.log("message sending results", data); 
                    var body = JSON.parse(data.text());
                    console.log(body);
                    swal({
                        title: body.data,
                        text: "",
                        timer: 3000,
                        showConfirmButton: false
                    }).catch(swal.noop)
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
          });
      
          handler.open({
            name: 'Purchase PodWeb Token',
            //description: '2 widgets',
            amount: this.amountForTokenSelected
          });
    }
}