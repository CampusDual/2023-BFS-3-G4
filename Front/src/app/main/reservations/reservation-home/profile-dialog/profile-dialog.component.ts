import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,
    private ontimizeServiceUsers: OntimizeService
  ) { 

    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

  ngOnInit() {
  }

}
