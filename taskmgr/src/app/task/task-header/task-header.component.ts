import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTak = new EventEmitter();
  @Output() moveAll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick () {
    this.newTak.emit();
  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

}
