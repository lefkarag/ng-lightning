import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: 'ngl-truncate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dl [ngClass]="'slds-size--' + minSize + '-of-' + maxSize">
      <dt *ngIf="heading" class="slds-text-heading--label">{{heading}}</dt>
      <dd>
        <p class="slds-truncate">{{text}}</p>
      </dd>
    </dl>`,
})
export class NglTruncate {
  @Input() minSize: number;
  @Input() maxSize: number;
  @Input() text: string;
  @Input() heading: string;
};
