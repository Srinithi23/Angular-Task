import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about/about.component';
import { HomeComponent } from './Home/home/home.component';
import { ModalsComponent } from './Shared/modals/modals.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'about',component:AboutComponent},
  {path:'modals',component:ModalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
