import { Component, OnInit } from '@angular/core';

export interface User {
  id: number,
  name: string
}

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'zhangsan'
    }, {
      id: 2,
      name: 'lisi'
    }, {
      id: 3,
      name: 'wangwu'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: User) {
    return user ? user.name : '';
  }

}
