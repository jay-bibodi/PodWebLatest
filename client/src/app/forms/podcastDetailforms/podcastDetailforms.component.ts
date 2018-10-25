import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { FileUploader} from "ng2-file-upload"

declare const require: any;

declare const $: any;

@Component({
  selector: 'app-extendedforms-cmp',
  templateUrl: 'podcastDetailforms.component.html',
  styles: [`md-calendar {
      width: 300px;
  }`]
})

export class PodcastDetailComponent implements OnInit {

  UIChange = false;
  tags = [];
  isPaidPodcast = false;
  isAmountPresent = true;
  isTitlePresent = true;
  isErrorPresent = false;
  isRadioButtonSelected = true; 

  errorTextForAmount: string;
  amount: string;
  selectedType: string;
  podcastTypes: string[] = ['Paid Podcast', 'Free Podcast'];

  constructor(private http: Http, private router: Router) { }

  radioChange(event) {
    console.log(event.value);
    if (event.value === "Paid Podcast") {
      this.isPaidPodcast = true;
    }
    else if (event.value === "Free Podcast") {
      this.isPaidPodcast = false;
    }
  }

  goBack() {
    if (!this.UIChange) {
      this.router.navigate(["tables/userPublishedTable"]);
    }
    else {
      swal({
        title: 'Are you sure?',
        text: "Changes will be lost",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        console.log(result.value);
        if (result.value) {
          this.router.navigate(["tables/userPublishedTable"]);
        }
      })
    }
  }

  mark_changed() {
    this.UIChange = true;
  }

  editPodcastDetail(form){
    console.log(this.selectedType);
    

    if(this.isPaidPodcast && (form.amount === undefined || (form.amount).trim().length === 0))
    {
      this.isAmountPresent = false;
      this.errorTextForAmount = "Amount of pods are required"
      this.isErrorPresent = true;
    }
    if(parseInt(form.amount) === NaN){
      this.isAmountPresent = false;
      this.errorTextForAmount = "Amount should be expressed in Integer"
      this.isErrorPresent = true;
    }
    if(form.title === undefined || (form.title).trim().length === 0){
      this.isTitlePresent = false;
      this.isErrorPresent = true;
    }
    if(this.selectedType === undefined){
      this.isErrorPresent = true;
      this.isRadioButtonSelected = false;
    }
    
    if(!this.isErrorPresent){
      console.log(form);
    }
  }

  loadPublishedPodcast(){
    this.goBack()
  }

  ngOnInit() { }
  myFunc(val: any) {
    // code here
  }

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/uploadfile'});
}
