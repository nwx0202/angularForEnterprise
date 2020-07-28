import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    // 打开侧边栏，将点击事件发送出去
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    if (checked) {
      this.toggleDarkTheme.emit(checked);
    }
  }

}
