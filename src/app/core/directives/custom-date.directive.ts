import { Directive, HostListener, forwardRef } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCustomDate]',
})
export class CustomDateDirective implements ControlValueAccessor {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  public writeValue(value: any): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
  }
  public registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('keypress', ['$event.target.value', '$event'])
  onKeyPress(value: string, event) {
    if (isNaN(event.key)) event.preventDefault();
    value = value.replace(/\D/g, '');
    const formattedValue = this.formatDate(value);
    this.writeValue(formattedValue);
  }

  public formatDate(inputValue: string): string {
    if (inputValue.length <= 1) {
      inputValue = inputValue.replace(/^(\d{0,2})/, '$1');
    }
    else if (inputValue.length <= 3) {
      inputValue = inputValue.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
    }
    else if (inputValue.length <= 7) {
      inputValue = inputValue.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
    } else {
      inputValue = inputValue.substring(0, 8);
      inputValue = inputValue.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
    }
    return inputValue;
  }

}