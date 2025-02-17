import {ElementRef, Renderer} from 'angular2/core';

export function toBoolean(value: any): boolean {
  switch (value) {
    case '':
      return true;

    case 'false':
    case '0':
      return false;

    default:
      return !!value;
  }
}

export function isInt(value: any): boolean {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

export interface IReplaceClass {
  renderer: Renderer;
  element: ElementRef;
};
export function replaceClass(instance: IReplaceClass, oldClass: string, newClass: string = null) {
  if (oldClass === newClass) return;

  instance.renderer.setElementClass(instance.element.nativeElement, oldClass, false);
  if (newClass) {
    instance.renderer.setElementClass(instance.element.nativeElement, newClass, true);
  }
}
