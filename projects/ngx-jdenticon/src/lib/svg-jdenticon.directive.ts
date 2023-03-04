import { Directive, Input, OnChanges, HostBinding, ElementRef, Inject, Optional, NgZone } from '@angular/core';
import { updateSvg, JdenticonConfig } from 'jdenticon/browser';
import { JDENTICON_CONFIG } from './config';

// Use same attributes as for VanillaJS Jdenticon.
// tslint:disable:directive-selector no-input-rename

@Directive({
  selector: 'svg[data-jdenticon-hash],svg[data-jdenticon-value]',
})
export class SvgJdenticonDirective implements OnChanges {

  @Input('data-jdenticon-hash')
  @HostBinding('attr.data-jdenticon-hash')
  hash: string;

  @Input('data-jdenticon-value')
  @HostBinding('attr.data-jdenticon-value')
  value: any;

  @Input()
  @HostBinding('attr.width')
  width: string | number;

  @Input()
  @HostBinding('attr.height')
  height: string | number;

  constructor(
    private el: ElementRef<SVGSVGElement>,
    private zone: NgZone,
    @Optional() @Inject(JDENTICON_CONFIG) private config: JdenticonConfig,
  ) { }

  ngOnChanges(): void {
    // setTimeout is used to ensure that Angular has updated the host attributes.
    // runOutsideAngular is used to prevent an additional Angular change detection.
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        updateSvg(this.el.nativeElement, undefined, this.config);
      });
    });
  }

}
