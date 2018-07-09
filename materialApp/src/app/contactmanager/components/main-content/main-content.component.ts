import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private service: UserService
  ) { this.user = null;}

  ngOnInit() {
    this.route.params.subscribe(param => {
      let id = param['id'];
      
      if (!id)
        id == 1;

      this.service.users.subscribe(users => {      
        this.user = this.service.userById(id);
      })
    });
  }

}
