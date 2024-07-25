import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(this.ngControl.value, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(this.ngControl.value, true);
  }

  public onInputChange(event, backspace) {
    if (event !== null) {
      let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 6) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length == 0) {
        newVal = '';
        this.ngControl.control.reset();
      } else if (newVal.length <= 3) {
        newVal = newVal.replace(/^(\d{0,3})/, '($1)');
      } else if (newVal.length <= 6) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
      } else if (newVal.length <= 10) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
      }
      this.ngControl.valueAccessor.writeValue(newVal);
    }
  }
}