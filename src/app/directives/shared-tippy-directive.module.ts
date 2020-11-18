// librerías
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// directivas
import { TippyDirective } from './tippy.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TippyDirective,
  ],
  exports: [
    TippyDirective,
  ],
})
export class SharedTippyDirectiveModule { }
