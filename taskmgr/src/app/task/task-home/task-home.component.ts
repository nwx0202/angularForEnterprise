import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          completed: true,
          priority: 1,
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：修改第一个bug',
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          completed: false,
          priority: 2,
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：复习昨天的学习内容，看一篇掘金文章',
          completed: false,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
          priority: 3,
          remainer: new Date()
        },
        {
          id: 2,
          desc: '任务四：制定明天的学习计划',
          completed: true,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          priority: 1,
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: {
        title: '新建任务'
      }
    });
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.lists
      }
    });
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: {
        title: '修改任务',
        task: task
      }
    })
  }

  launchDelListDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务列表',
        content: '确定要删除该任务列表吗？'
      }
    });
  }

  launcheditListDialog() {
    this.dialog.open(NewTaskListComponent, {
      data: {
        title: '更改列表名称'
      }
    });
  }

  launchNewListDialog() {
    this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新增列表'
      }
    });
  }

}
