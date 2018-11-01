import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { FileUploader } from "ng2-file-upload"

declare const require: any;

declare const $: any;

@Component({
  selector: 'app-podcastDetailforms-cmp',
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
  selectFileToUpload = true;
  fileUploaded = false;
  fileId: string;

  titleName: string;
  errorTextForAmount: string;
  amount: string;
  artistName: string;
  selectedType: string;
  podcastTypes: string[] = ['Paid Podcast', 'Free Podcast'];
  tagsArray = [];
  showPlayButton = false;
  isFromEdit = false;
  
  pathOfPodcastId = null;

  podcastPurchasedByDetail = [];
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/uploadfile' });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private http: Http, private router: Router,private route: ActivatedRoute) { }

  radioChange(event) {
    console.log(event.value);
    if (event.value === "Paid Podcast") {
      this.selectedType = "Paid Podcast";
      this.isPaidPodcast = true;
    }
    else if (event.value === "Free Podcast") {
      this.isPaidPodcast = false;
      this.selectedType = "Free Podcast";
    }
  }

  goBack() {
    if (!this.UIChange) {
      this.router.navigate(["tables/userPublishedTable"]);
    }
    else {
      if(this.fileUploaded)
      {
        this.router.navigate(["tables/userPublishedTable"]);
      }
      else{
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
  }

  mark_changed() {
    this.UIChange = true;
  }

  editPodcastDetail(form) {
    if (this.isPaidPodcast && (form.amount === undefined || (form.amount).trim().length === 0)) {
      this.isAmountPresent = false;
      this.errorTextForAmount = "Amount of pods are required"
      this.isErrorPresent = true;
    }
    if (parseInt(form.amount) === NaN) {
      this.isAmountPresent = false;
      this.errorTextForAmount = "Amount should be expressed in Integer"
      this.isErrorPresent = true;
    }
    if (form.titleName === undefined || (form.titleName).trim().length === 0) {
      this.isTitlePresent = false;
      this.isErrorPresent = true;
    }
    if (this.selectedType === undefined) {
      this.isErrorPresent = true;
      this.isRadioButtonSelected = false;
    }

    if (!this.isFromEdit && this.uploader.queue.length === 0) {
      this.isErrorPresent = true;
      this.selectFileToUpload = false;
    }

    if (!this.isErrorPresent && !this.isFromEdit) {
      console.log("Inside if");
      console.log(form.tags);

      for (var i = 0; i < form.tags.length; i++) {
        this.tagsArray.push(form.tags[i].display);
      }

      this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
        form.append('title', this.titleName);
        form.append('artist', this.artistName);
        form.append('tags', this.tagsArray);
        form.append('isPaidPodcast', this.isPaidPodcast);
        form.append('amount', this.amount);
        form.append('token', localStorage.getItem("token"))
        form.append('emailAddress', localStorage.getItem("emailAddress"))
      };

      this.uploader.uploadAll();

      this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
        if (response) {
          //console.log("response" + JSON.stringify(response));
          this.fileUploaded = true;
          this.UIChange = false;
          var body = JSON.parse(response);
            swal({
              title: body.status,
              text: "",
              timer: 2000,
              showConfirmButton: false
          }).catch(swal.noop)
        }
      }

      this.uploader.onErrorItem = (item: any, response: string, status: number, headers: any): any => {
        if (response) {
          //console.log("response" + JSON.stringify(response));
          var body = JSON.parse(response);
            swal({
              title: body.status,
              text: "",
              timer: 2000,
              showConfirmButton: false
          }).catch(swal.noop)
        }
      }
    }
    else if(!this.isErrorPresent && this.isFromEdit)
    {
      console.log("Inside else of form submit");
        let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.tagsArray = [];

        console.log("Tags")
        console.log(form.tags);
        for (var i = 0; i < form.tags.length; i++) {
          this.tagsArray.push(form.tags[i].display);
        }
        console.log(this.tagsArray);
        
        var editedObject = {
          'title':this.titleName,
          'artist': this.artistName,
          'tags': this.tagsArray,
          'isPaidPodcast': this.isPaidPodcast,
          'amount': this.amount,
          'id': this.fileId
        }
        
        console.log("editedObj")
        console.log(editedObject);

        this.http.post('http://localhost:3000/updatePodcastDetails',editedObject,{headers: headers}).subscribe((data) => {
          var body = JSON.parse(data.text());
  
          swal({
            title: body.status,
            text: "",
            timer: 2000,
            showConfirmButton: false
          }).catch(swal.noop);
        },(err) => { console.log("message sending err", err) }, () => {})
    }
  }

  /*check_for_error(error) {
    console.log(error)
  }*/

  deleteFile(item){
    console.log(item);
    this.uploader.removeFromQueue(item);
  }

  loadPublishedPodcast() {
    this.goBack()
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);

      let headers = new Headers();
        headers.append("token",localStorage.getItem("token")); 
        headers.append("emailAddress",localStorage.getItem("emailAddress"));

        this.http.post('http://localhost:3000/getPodcastDetailsForView',{"id":params.id},{headers: headers}).subscribe((data) => {
            console.log("message sending results", data); 
            this.showPlayButton = true;
            this.isFromEdit = true;

            this.pathOfPodcastId = params.id;

            var jsonData = data.json();
            if(jsonData.status !== "Adding Podcast"){
              
              jsonData = jsonData.data;
              
              this.fileId = jsonData.fileHashKey[0].hash
              this.titleName = jsonData.title;
              this.artistName = jsonData.artistName;
              if(jsonData.amount!=="undefined"){
                this.selectedType = "Paid Podcast";
                this.isPaidPodcast = true;
                this.amount = jsonData.amount
              }
              else{
                this.selectedType = "Free Podcast";
              }

              this.podcastPurchasedByDetail = jsonData.purchasedUserList;

              var tagsArr = jsonData.tags.split(",");
              for (var i = 0; i <  tagsArr.length; i++) {
                this.tags.push({ "display":  tagsArr[i], "value":  tagsArr[i] });
              }
            }
            else{
              this.showPlayButton = false;
              this.isFromEdit = false;
            }
        }, (err) => { 

        })
    })
   }
  myFunc(val: any) {
    // code here
  }
}