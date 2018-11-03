import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner'
import {Global} from '../../global';

@Component({
  selector: 'app-detailForLatestAndPurchasedPodcast-cmp',
  templateUrl: 'detailForLatestAndPurchasedPodcast.component.html',
  styles: []
})

export class DetailForLatestAndPurchasedPodcastComponent implements OnInit {

  isPaidPodcast = false;
  titleValue:any;
  uploadedByValue:any;
  tagsValue:any;
  artistNameValue:any;
  createdDateTimeValue:any;
  amountValue:any;
  likesValue = 0;
  likeButtonValue = "Like";
  isPurchasedPodcast = true;
  podcastId:string;
  private id: string;

  constructor(private http: Http, private router: Router,private route: ActivatedRoute,private spinner:NgxSpinnerService) { }

  goBack() 
  {
    this.router.navigate(["tables/latestPodcast"]);
  }

  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.id = params.id;

      let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.http.post(Global.API_ENDPOINT+'/getPodcastForCurrUser',{"id":this.id},{headers: headers}).subscribe((data) => {
            var body = JSON.parse(data.text());

            this.isPaidPodcast = (body.isPaidPodcast === "false" ? false:true);
            this.isPurchasedPodcast = body.isPurchasedPodcast;
            this.uploadedByValue = body.uploadedByValue;
            this.titleValue = body.titleValue;
            this.tagsValue = body.tagsValue;
            this.artistNameValue = body.artistNameValue;
            this.createdDateTimeValue = body.createdDateTimeValue;
            this.likesValue = body.likesValue;
            this.amountValue = (body.amountValue === undefined ? "0": body.amountValue);

            if(!this.isPaidPodcast || (this.isPaidPodcast && this.isPurchasedPodcast)){
              this.podcastId = this.id;
            }
            else{
              this.podcastId = "";
            }
            this.spinner.hide();
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
    })
    
   }

   callLikeFunc(){
     if(this.likeButtonValue === "Like"){
      this.likeButtonValue = "Liked";
      this.likesValue = this.likesValue + 1;
    }
     else if(this.likeButtonValue === "Liked"){
      this.likeButtonValue = "Like";
      this.likesValue = this.likesValue - 1;
     }
     
   }

   callPurchasePodcast(){
     if(this.isPaidPodcast && !this.isPurchasedPodcast){
      swal({
        title: 'Paid Podcast',
        text: "Do you want to purchase " + this.titleValue + " podcast by " + this.artistNameValue + " for " + this.amountValue + " pods token?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        
        if (result.value === true) {
          this.spinner.show();
          let headers = new Headers();
          headers.append("token", localStorage.getItem("token"));
          headers.append("emailAddress", localStorage.getItem("emailAddress"));

          this.http.post(Global.API_ENDPOINT+'/transferPodsToPurchase',{"id":this.id,"amount":this.amountValue},{ headers: headers }).subscribe((data) => {
            var body = JSON.parse(data.text());
            
            this.isPurchasedPodcast = true;
            this.podcastId = this.id;

            this.spinner.hide();
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
        });
     }
   }
}