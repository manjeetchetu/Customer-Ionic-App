import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'tabl',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ReactiveFormsModule, FormsModule]
})
export class Tab2PageRoutingModule {}
