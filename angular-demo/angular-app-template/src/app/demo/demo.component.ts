import { Component, OnInit, OnChanges, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<h1>{{num}}</h1>
//            <button (click)="onClick()">Change number</button>`
// })
// export class DemoComponent implements OnInit, OnChanges {

//   num = 1;
//   constructor(private _ngZone: NgZone) {

//   }
//   ngOnInit() { }
//   ngOnChanges(changes) {
//     console.log('changes..', changes);
//   }

//   onClick() {
//     this._ngZone.runOutsideAngular(
//       () => {
//         this.num = 2;
//       }
//     );
//   }
//   // onClick() {
//   //   this.num = 2;
//   // }
// }

@Component({
  selector: 'app-demo',
  template: `
    <h3>Progress: {{progress}}</h3>
    <button (click)="processWithinAngularZone()">
      Process within Angular zone
    </button>
    <button (click)="processOutsideAngularZone()">
      Process Outside Angular zone
    </button>
  `
})
export class DemoComponent {

  progress = 0;

  constructor(private zone: NgZone) {}

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }
  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);
    if (this.progress < 100) {
      window.setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }
}

