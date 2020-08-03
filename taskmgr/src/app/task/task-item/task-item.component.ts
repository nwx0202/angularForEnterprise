import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from 'src/app/anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'out';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(event: Event) {
    event.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'in';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'out';
  }

}
