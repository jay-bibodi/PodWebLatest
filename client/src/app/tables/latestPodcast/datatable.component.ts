// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
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
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'View', 'id', 'amount'],
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
    table.on('click', '.play', function (e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });

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
}