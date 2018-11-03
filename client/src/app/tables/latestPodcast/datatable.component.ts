import { Component, OnInit, AfterViewInit, Output, EventEmitter, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Global } from '../../global';

declare interface DataTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-data-table-cmp',
  templateUrl: 'datatable.component.html'
})

@Injectable()
export class DataTableComponent implements OnInit, AfterViewInit {
  public dataTable: DataTable;
  constructor(private http: Http, private router: Router, private spinner: NgxSpinnerService) { }
  dataRowsFromDB = null;

  ngOnInit() {

    this.spinner.show();
    let headers = new Headers();
    headers.append("token", localStorage.getItem("token"));
    headers.append("emailAddress", localStorage.getItem("emailAddress"));

    this.http.get(Global.API_ENDPOINT + '/getLatestPodcast', { headers: headers }).subscribe((data) => {
      this.dataTable = {
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id', 'amount'],
        dataRows: data.json().data
      }
      
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
    $('#latestPodcastDataTable').DataTable({
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
    $('.card .material-datatables label').addClass('form-group');
  }
}