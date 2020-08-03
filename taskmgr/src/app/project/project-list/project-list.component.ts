import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from 'src/app/anims/router.anim';
import { listAnimatoin } from 'src/app/anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimatoin
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      'id': 1,
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/covers/0.jpg'
    },
    {
      'id': 2,
      'name': '企业协作平台1',
      'desc': '这是一个企业内部项目1',
      'coverImg': 'assets/covers/1.jpg'
    }
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '新增项目' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects, {
        id: 3,
        name: '一个新项目',
        desc: '这是一个新项目',
        coverImg: 'assets/covers/2.jpg'
      }]
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '编辑项目' }
    })
  }

  launchDelDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除项目',
        content: '确定要删除该项目吗？'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => {
        return p.id !== project.id;
      });
    });
  }

}
