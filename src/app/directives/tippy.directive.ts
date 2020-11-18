import tippy from 'tippy.js';
import { Subscription } from 'rxjs';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Directive, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tippy]'
})
export class TippyDirective implements OnInit, OnDestroy {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tippyOptions') public tippyOptions: any;
  private scroll: Subscription;

  constructor(
    private el: ElementRef,
    private scrollDispatcher: ScrollDispatcher
  ) {
    this.el = el;
    this.scroll = new Subscription();
  }

  public ngOnInit(): void {
    let tooltip: any;
    if (
      typeof this.tippyOptions.disabled === 'undefined' ||
      typeof this.tippyOptions.disabled !== 'undefined' && this.tippyOptions.disabled === false
    ) {
      delete this.tippyOptions.disabled;
      tooltip = tippy(this.el.nativeElement, this.tippyOptions || {});
      this.scroll = this.scrollDispatcher.scrolled().subscribe(x => tooltip.hide(0));
    }
  }

  ngOnDestroy(): void {
    this.scroll.unsubscribe();
  }

}
