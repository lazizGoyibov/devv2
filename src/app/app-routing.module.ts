import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import {Section1Component} from './components/section1/section1.component';



const routes: Routes = [
  {path: '', component: Section1Component},
  {path: 'work/:id', component: WorkComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
