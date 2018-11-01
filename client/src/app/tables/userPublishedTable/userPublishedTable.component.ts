// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { PodcastDetailComponent } from '../../forms/podcastDetailforms/podcastDetailforms.component'

declare interface UserPublishedTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-user-published-table-cmp',
  templateUrl: 'userPublishedTable.component.html',
})

export class UserPublishedTableComponent implements OnInit, AfterViewInit {
  public dataTable: UserPublishedTable;
  podcastId = UUID.UUID();
  dataRowsFromDB = null;
  public self = null;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.self = this;
    let headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    headers.append("emailAddress", localStorage.getItem("emailAddress"));
 
    this.http.get('http://localhost:3000/getUserPublishedPodcast', { headers: headers }).subscribe((data) => {
      console.log("message sending results", data);
      this.dataRowsFromDB = data.json();
      this.dataRowsFromDB = this.dataRowsFromDB.data
 
      console.log(this.dataRowsFromDB);
 
      this.dataTable = {
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'Actions','id', 'amount'],
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

  /*ngOnInit() {
    this.dataTable = {
      headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'View', 'Actions', 'id', 'amount'],
      footerRow: [],

      dataRows: [
        ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', '', '', '', '', ''],
        ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round', '', '', '', '', ''],
        ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple', '', '', '', '', '']
      ]
    };

  }*/

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

    /*table.on('click','.view',function(e){
      console.log("Inside view");
      //const $tr = $(this).closest('tr');
      //const data = table.row($tr).data();
      //this.router.navigate(["tables/userPublishedTable/"+data[8]]);
      e.preventDefault();
    })

    // Edit record
    table.on('click', '.edit', function(e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });*/

    // Delete a record
    table.on('click', '.remove', function (e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    /*table.on('click', '.like', function(e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });*/

    $('.card .material-datatables label').addClass('form-group');
  }

  clickOnPlay(index) {
    console.log("clickOnPlay")
    var rowData = this.dataTable.dataRows[index];
    console.log(rowData);
    // play podcast
  }
}