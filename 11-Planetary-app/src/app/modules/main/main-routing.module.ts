import { DetailsGuard } from './../../shared/guards/details.guard';
import { DetailsComponent } from './pages/details/details.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:MainComponent
  },
  {
    path: 'details',
    component:DetailsComponent,
    canActivate: [DetailsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }