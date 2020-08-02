import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <form>
      <h2 mat-dialog-title>{{title}}</h2>
      <div mat-dialog-content>
        {{content}}
      </div>

      <div mat-dialog-actions>
        <button type="button" mat-raised-button color="primary" (click)="onclick()">确定</button>
        <button type="button" mat-button mat-dialog-closed (click)="onclick(false)">取消</button>
      </div>
    </form>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onclick(result: boolean) {
    this.dialogRef.close(result);
  }

}
