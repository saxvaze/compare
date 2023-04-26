import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V1Component } from './v1.component';
import { V1RouterModule } from './v1-router.module';



@NgModule({
  declarations: [
    V1Component
  ],
  imports: [
    CommonModule,
    V1RouterModule
  ]
})
export class V1Module { }
