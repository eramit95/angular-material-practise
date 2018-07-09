import { NewContactDialogComponent } from './../new-contact-dialog/new-contact-dialog.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router
              ) { }

  ngOnInit() {
  }

  openAddContactDialog() {
    let dialogRef = this.dialog.open(NewContactDialogComponent,{
      height: '450px'      
    })
  }

}
