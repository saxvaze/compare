import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.module').then(m => m.V1Module)
  },
  {
    path: 'v2',
    loadChildren: () => import('./v2/v2.module').then(m => m.V2Module)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'v1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule { }
