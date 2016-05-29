import {Component} from '@angular/core'
import {Directive, Input, HostBinding, ElementRef, Output, EventEmitter} from '@angular/core';
import {Collapse} from './toggle-service.component';

@Component({
  selector: 'panel',
  styles: [`
    .hide {
      display: none;
    },
    `
  ],
  template: `
  <div class="card" *ngIf="title">
    <div class="card-header" (click)="toggle()">{{title}}  </div>
    <div  class="card-block" [ngClass]="{hide: !opened}"><ng-content></ng-content></div>
  </div>`,
  inputs: ['title']
})

export class Panel {
  opened: Boolean = false;
  toggle() {
    this.opened = !this.opened;
  }
}

@Component({
  selector: 'toggle-test',
  directives: [Collapse, Panel],
  template: `
    <div>
      <h2 (click)="isCollapsed = !isCollapsed">click here</h2>
      
      <div [collapse]="isCollapsed" >
        <div>
            <panel [title]="'My static title'" >static content</panel>
            <panel [title]="title" >{{body}}</panel>
            <toggle-test></toggle-test>
        </div>
      </div>
    </div>

  `,
})
export class CollapseFeature {
  title: string = 'my awesome title';
  body: string = 'my awesome content';
  }
} 