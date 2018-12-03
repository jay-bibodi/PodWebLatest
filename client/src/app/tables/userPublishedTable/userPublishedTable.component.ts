import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Global } from '../../global';

declare interface UserPublishedTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-user-published-table-cmp',
  templateUrl: 'userPublishedTable.component.html',
})

export class UserPublishedTableComponent implements OnInit, AfterViewInit {
  public userPublishedTableDataTable: UserPublishedTable;
  podcastId = UUID.UUID();
  public self = null;

  constructor(private http: Http, private router: Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    
    this.spinner.show();
    

    this.self = this;
    let headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    headers.append("emailAddress", localStorage.getItem("emailAddress"));
 
    this.http.get(Global.API_ENDPOINT+'/getUserPublishedPodcast', { headers: headers }).subscribe((data) => {
      this.userPublishedTableDataTable = {
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'Actions','id', 'amount'],
        dataRows: data.json().data
      }
    //this.userPublishedTableDataTable.dataRows = data.json().data;  
    this.spinner.hide();
    }, (err) => { 
      this.spinner.hide();
      var body = JSON.parse(err.text());
      swal({
        title: body.status,
        text: "",
        timer: 3000,
        showConfirmButton: false
      }).catch(swal.noop);
    })
  }

  ngAfterViewInit() {
    $('#publishedTableId').DataTable({
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

    const table = $('#publishedTableId').DataTable();

    // Delete a record
    table.on('click', '.remove', function (e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }
}