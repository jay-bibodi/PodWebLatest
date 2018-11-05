// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Global } from '../../global';

declare interface PurchasedPodcastTable {
  headerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-purchased-podcast-cmp',
    templateUrl: 'purchasedPodcast.component.html'
})

export class PurchasedPodcastTableComponent implements OnInit, AfterViewInit {
    public dataTable: PurchasedPodcastTable;
    constructor(private http: Http, private router: Router,private spinner:NgxSpinnerService) { }
    dataRowsFromDB = null;

    ngOnInit() {
      this.spinner.show();
      let headers = new Headers();
      headers.append("token", localStorage.getItem("token"));
      headers.append("emailAddress", localStorage.getItem("emailAddress"));
  
      this.http.get(Global.API_ENDPOINT+'/getPurchasedPodcastList', { headers: headers }).subscribe((data) => {
        console.log("Purchased Podcast list")
        console.log(data);
        this.dataTable = {
          headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id','Actions'],
          dataRows: data.json().data
        }       
        this.spinner.hide();
      }, (err) => { 
        var body = JSON.parse(err.text())
        this.spinner.hide();
        swal({
          title: body.status,
          text: "",
          timer: 3000,
          showConfirmButton: false
        }).catch(swal.noop);
      })
    }

    ngAfterViewInit() {
      $('#purchasedTable').DataTable({
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

      const table = $('#purchasedTable').DataTable();

      // Delete a record
      table.on('click', '.remove', function(e) {
        const $tr = $(this).closest('tr');
        table.row($tr).remove().draw();
        e.preventDefault();
      });

      $('.card .material-datatables label').addClass('form-group');
    }
}