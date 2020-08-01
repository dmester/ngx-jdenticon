import { NgModule } from '@angular/core';
import { SvgJdenticonDirective } from './svg-jdenticon.directive';
import { CanvasJdenticonDirective } from './canvas-jdenticon.directive';

@NgModule({
  declarations: [SvgJdenticonDirective, CanvasJdenticonDirective],
  exports: [SvgJdenticonDirective, CanvasJdenticonDirective]
})
export class NgxJdenticonModule { }
