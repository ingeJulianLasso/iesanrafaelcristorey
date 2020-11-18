// librerías
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// directivas
import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LazyImgDirective,
  ],
  exports: [
    LazyImgDirective,
  ],
})
export class SharedLazyImgDirectiveModule { }
