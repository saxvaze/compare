import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2Component } from './v2.component';
import { V2RouterModule } from './v2-router.module';



@NgModule({
  declarations: [
    V2Component
  ],
  imports: [
    CommonModule,
    V2RouterModule
  ]
})
export class V2Module { }
