import {Directive, Input, Output, EventEmitter, HostBinding} from 'angular2/core';

@Directive({
  selector: '[nglDropdown]',
  host: {
    'class': 'slds-dropdown-trigger--click',
  },
})
export class NglDropdown {

  @Input('nglDropdown') isOpen = false;
  @Output() nglDropdownChange: EventEmitter<boolean> = new EventEmitter(false);

  @HostBinding('class.slds-is-open') get _classIsOpen() {
    return this.isOpen;
  }

  @HostBinding('attr.aria-expanded') get _attrAriaExpanded() {
    return this.isOpen;
  }

  toggle() {
    this.nglDropdownChange.emit(!this.isOpen);
  }

}
