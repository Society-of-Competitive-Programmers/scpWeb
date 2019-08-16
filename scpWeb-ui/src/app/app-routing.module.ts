import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SpotlightComponent } from './pages/spotlight/spotlight.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HackathonTravelFormComponent } from './pages/hackathon-travel-form/hackathon-travel-form.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'spotlight', component:SpotlightComponent},
  {path:'contact-us', component:ContactusComponent},
  {path:'hackathon-travel-form', component:HackathonTravelFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
