import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {NglDropdown} from './dropdown';
import {NglDropdownTrigger} from './dropdown-trigger';


function getDropdownTriggerElement(element: Element): HTMLButtonElement {
  return <HTMLButtonElement>element.querySelector('button');
}

describe('`nglDropdownTrigger`', () => {

  it('should add default attributes', testAsync(({fixture, done}) => {
    fixture.detectChanges();

    const triggerEl = getDropdownTriggerElement(fixture.nativeElement);
    expect(triggerEl.getAttribute('aria-haspopup')).toBe('true');
    done();
  }));

  it('should add react on trigger clicks correctly', testAsync(({fixture, done}) => {
    const { nativeElement, componentInstance } = fixture;
    spyOn(componentInstance, 'change');
    const triggerEl = getDropdownTriggerElement(nativeElement);

    fixture.detectChanges();
    triggerEl.click();
    expect(componentInstance.change).toHaveBeenCalledWith(true);

    componentInstance.open = true;
    fixture.detectChanges();
    triggerEl.click();
    expect(componentInstance.change).toHaveBeenCalledWith(false);

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
  directives: [NglDropdown, NglDropdownTrigger],
  template: `
    <div [nglDropdown]="open" (nglDropdownChange)="change($event)">
      <button type="button" nglDropdownTrigger></button>
    </div>`,
})
export class TestComponent {
  open: boolean = false;
  change() {};
}
