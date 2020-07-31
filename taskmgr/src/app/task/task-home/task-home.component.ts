import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
