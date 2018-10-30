// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-data-table-cmp',
  templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit, AfterViewInit {
  public dataTable: DataTable;
  constructor(private http: Http, private router: Router) { }
  dataRowsFromDB = null;
  @Output() getPodcastIdPath = new EventEmitter<any>();

  ngOnInit() {
    let headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    headers.append("emailAddress", localStorage.getItem("emailAddress"));

    this.http.get('http://localhost:3000/getLatestPodcast', { headers: headers }).subscribe((data) => {
      console.log("message sending results", data);
      this.dataRowsFromDB = data.json();
      this.dataRowsFromDB = this.dataRowsFromDB.data

      console.log(this.dataRowsFromDB);

      this.dataTable = {
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'Like', 'View', 'id', 'amount'],
        footerRow: [],
        dataRows: this.dataRowsFromDB
      }

      var body = JSON.parse(data.text());

      swal({
        title: body.status,
        text: "",
        timer: 3000,
        showConfirmButton: false
      }).catch(swal.noop);
    }, (err) => { console.log("message sending err", err) })
  }

  ngAfterViewInit() {
    $('#datatables').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });

    const table = $('#datatables').DataTable();

    // Edit record
    /*table.on('click', '.play', function (e) {
      
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      console.log('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      
      e.preventDefault();
      if(data[4] !== "No"){
        console.log("Inside play inside No")
        swal({
          title: 'Paid Podcast',
          text: "Do you want to purchase "+data[0]+" podcast by "+data[1]+" for "+data[9]+" pods token?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm'
        }).then((result) => {
          console.log(result.value);
          if (result.value) {
            
            self.http.post('http://localhost:3000/signup', this.model).subscribe((data) => {

            })
            
            // when confirms make an api call 
          }
        })
      }
    });*/

    // Edit record
    table.on('click', '.view', function (e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[7] + '\'s row.');
      //e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function (e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function (e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }

  clickOnPlay(index) {
    console.log("clickOnPlay")
    var rowData = this.dataTable.dataRows[index];
    console.log(rowData);
    if (rowData[4] !== "No") {
      console.log("Inside play inside No")
      swal({
        title: 'Paid Podcast',
        text: "Do you want to purchase " + rowData[0] + " podcast by " + rowData[1] + " for " + rowData[9] + " pods token?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then((result) => {
        console.log(result.value);
        if (result.value === true) {
          console.log("Inside if result.value")

          let headers = new Headers();
          headers.append("token", localStorage.getItem("token"));
          headers.append("emailAddress", localStorage.getItem("emailAddress"));

          console.log(this);

          this.http.post('http://localhost:3000/transferPodsToPurchase',{"id":rowData[8],"amount":rowData[9]},{ headers: headers }).subscribe((data) => {
            console.log(data);
            var body = JSON.parse(data.text());
            this.dataTable.dataRows[index][4] = body.purchasedStatus;
            swal({
              title: body.status,
              text: "",
              timer: 1000,
              showConfirmButton: false
            }).catch(swal.noop);
            // play podcast
            // pass src to audio control
          }, (err) => { console.log("message sending err", err) }, () => { })

          // when confirms make an api call 
        }
      })
    } else {
      console.log("Inside else of click on play")
      console.log(this.getPodcastIdPath.emit(rowData[8]));
      this.getPodcastIdPath.emit(rowData[8]);
      // play podcast
      // pass src to audio control
    }
  }
}