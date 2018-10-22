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
  prices: string;
  tokens: string;
    
  constructor(private http: Http,private router: Router){}

  tokenList: null;

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
          this.prices = (body.price).toString();
          this.tokens = body.tokens;
          console.log(this.prices);
          console.log(this.tokens);
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

    purchaseToken(form){
        var self = this;
        console.log("Inside purchase Token form");
        console.log(form.amountForTokenSelected);
        console.log(this.prices);
        console.log(this.tokens);
        var ethPrice = this.prices;
        var tokensToBuy = this.tokens;

        var purchaseTokenObj = {
            "stripeId":"",
            "price":ethPrice,
            "tokens":tokensToBuy,
            "amount":form.amountForTokenSelected
        }

        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_CoMBkQnIgd8vejmt3EsQTasU',
            locale: 'auto',
          });

          handler.open({
            name: 'Purchase PodWeb Token',
            //description: '2 widgets',
            amount: (parseFloat(form.amountForTokenSelected) * 100),
            token: function (token: any) {
                console.log(token);
                console.log(token.id);
                purchaseTokenObj.stripeId = token.id;        
                console.log(purchaseTokenObj);
                //this.callStripePurchaseToken(purchaseTokenObj);
                /*swal({
                    title: "Tokens will be credited in your account in few minutes!",
                    text: "If tokens are not credited within 3 hours! Please contact send us an email",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(swal.noop)*/

                let headers = new Headers();
                headers.append("token",localStorage.getItem("token")); 
                headers.append("emailAddress",localStorage.getItem("emailAddress"));

                self.http.post('http://localhost:3000/stripePurchaseToken', purchaseTokenObj,{headers: headers}).subscribe((data) => {
                    console.log("message sending results stripePurchaseToken", data); 
                        console.log(data.status);
                        var body = JSON.parse(data.text());
                        console.log(body);
                        swal({
                            title: body.status,
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
                        self.router.navigateByUrl('/');
                    })
            }
          });
    }
}