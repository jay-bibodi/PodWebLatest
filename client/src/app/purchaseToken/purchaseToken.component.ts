import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner'
import { Global } from '../global';

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
    panelOpenState = false;
    constructor(private http: Http, private router: Router, private spinner: NgxSpinnerService) { }

    tokenList: null;

    amountForTokenSelected: string;

    purchaseHistoryAcc = [];

    ngOnInit() {
        this.spinner.show();
        let headers = new Headers();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));

        this.http.get(Global.API_ENDPOINT + '/getTokenList', { headers: headers }).subscribe((data) => {
            this.tokenList = data.json().data;
            this.purchaseHistoryAcc = data.json().purchaseHistory
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
        });
    }

    selectedToken(value) {
        this.spinner.show();
        let headers = new Headers();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));

        this.http.post(Global.API_ENDPOINT+'/getAmountForTokenValue', { "totalToken": value }, { headers: headers }).subscribe((data) => {
            var body = JSON.parse(data.text());
            this.amountForTokenSelected = body.data;
            this.prices = (body.price).toString();
            this.tokens = body.tokens;
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

    purchaseToken(form) {
        var self = this;

        var ethPrice = this.prices;
        var tokensToBuy = this.tokens;

        var purchaseTokenObj = {
            "stripeId": "",
            "price": ethPrice,
            "tokens": tokensToBuy,
            "amount": form.amountForTokenSelected
        }

        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_CoMBkQnIgd8vejmt3EsQTasU',
            locale: 'auto',
        });

        handler.open({
            name: 'Purchase PodWeb Token',
            amount: (parseFloat(form.amountForTokenSelected) * 100),
            token: function (token: any) {
                purchaseTokenObj.stripeId = token.id;

                self.spinner.show();
                let headers = new Headers();
                headers.append("token", localStorage.getItem("token"));
                headers.append("emailAddress", localStorage.getItem("emailAddress"));

                self.http.post(Global.API_ENDPOINT+'/stripePurchaseToken', purchaseTokenObj, { headers: headers }).subscribe((data) => {
                    self.spinner.hide();
                    self.purchaseHistoryAcc = data.json().purchaseHistory;
                    swal({
                        title: data.json().status,
                        text: "",
                        timer: 3000,
                        showConfirmButton: false
                    }).catch(swal.noop)
                }, (err) => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("emailAddress");
                    self.spinner.hide();
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