import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePieceComponent } from './cube-piece/cube-piece.component';
import { WholeCubeComponent } from './whole-cube/whole-cube.component';



@NgModule({
  declarations: [
    CubePieceComponent,
    WholeCubeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WholeCubeComponent
  ]
})
export class CubeModule { }
