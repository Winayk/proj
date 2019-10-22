import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emiter',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
 </div>`,
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  visible: boolean = true;

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

}

// @Component({
//   selector: 'zippy',
//   template: `
//   <div class="zippy">
//     <div (click)="toggle()">Toggle</div>
//     <div [hidden]="!visible">
//       <ng-content></ng-content>
//     </div>
//  </div>`})
// export class Zippy {
//   visible: boolean = true;
 

//   toggle() {
//     this.visible = !this.visible;
//     if (this.visible) {
//       this.open.emit(null);
//     } else {
//       this.close.emit(null);
//     }
//   }
// }