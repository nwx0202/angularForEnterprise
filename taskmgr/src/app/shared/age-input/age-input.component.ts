import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    }
  ]
})
export class AgeInputComponent implements ControlValueAccessor {
  private propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  onChange(i) {
    // this.selected = this.items[i];
    // this.propagateChange(this.selected);
  }

  writeValue(obj: any): void {
    // this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

}
