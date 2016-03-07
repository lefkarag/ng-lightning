import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglDropdown} from './dropdown';


function getDropdownElement(element: Element): HTMLElement {
  return <HTMLElement>element.childNodes[0];
}

describe('`nglDropdown`', () => {

  it('should add default behaviour if closed', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const dropdownEl = getDropdownElement(fixture.nativeElement);
    expect(dropdownEl).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdownEl).not.toHaveCssClass('slds-is-open');
    expect(dropdownEl.getAttribute('aria-expanded')).toBe('false');
    done();
  }));

  it('should add default behaviour if open', testAsync(({fixture, done}) => {
    fixture.componentInstance.open = true;
    fixture.detectChanges();

    const dropdownEl = getDropdownElement(fixture.nativeElement);
    expect(dropdownEl).toHaveCssClass('slds-dropdown-trigger--click');
    expect(dropdownEl).toHaveCssClass('slds-is-open');
    expect(dropdownEl.getAttribute('aria-expanded')).toBe('true');
    done();
  }));

});

// Shortcut function to use instead of `injectAsync` for less boilerplate on each `it`
function testAsync(fn: Function, html: string = null) {
  return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return new Promise((done: Function) => {
      if (html) {
        tcb = tcb.overrideTemplate(TestComponent, html);
      }
      tcb.createAsync(TestComponent).then((fixture) => fn({ fixture, done}));
    });
  });
}

@Component({
  directives: [NglDropdown],
  template: '<div [nglDropdown]="open"></div>',
})
export class TestComponent {
  open: boolean = false;
}
