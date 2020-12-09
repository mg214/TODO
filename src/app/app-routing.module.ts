import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list', component: ListComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
