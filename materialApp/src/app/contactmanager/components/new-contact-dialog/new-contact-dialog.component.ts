import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User;

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
              private userService: UserService          
  ) { }

  name = new FormControl('',[Validators.required]);

  getErrorMessage() {    
    return this.name.hasError('required') ? 'You must enter a name.' 
                                   : '';
  }

  ngOnInit() {
    this.user = new User();
  }

  onSaveUserClicked() {
    debugger;
    if(!this.user.name ||this.user.name === "")
      return;
    this.userService.addUser(this.user).then(user => {
      //optional result to return to the dialog opener
      this.dialogRef.close(user); 
    })
  }
  
  dismiss() {
    this.dialogRef.close(null);
  }
}
