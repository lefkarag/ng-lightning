import {Directive, HostListener} from 'angular2/core';
import {NglDropdown} from './dropdown';

@Directive({
  selector: '[nglDropdownTrigger]',
  host: {
    'aria-haspopup': 'true',
  },
})
export class NglDropdownTrigger {

  constructor(private dropdown: NglDropdown) {}

  @HostListener('click') toggleOpen() {
    this.dropdown.toggle();
  }
}
