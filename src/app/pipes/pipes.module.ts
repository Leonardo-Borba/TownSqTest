import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitSizePipe } from './limitSize.pipe';



@NgModule({
  declarations: [LimitSizePipe],
  imports: [
    CommonModule
  ],
  exports: [LimitSizePipe]
})
export class PipesModule { }
