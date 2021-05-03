import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {UsersModule} from './users/users.module';
import { ViewMeComponent } from './view-me/view-me.component';
import { ViewMyLifeComponent } from './view-my-life/view-my-life.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'users',
    loadChildren: () => UsersModule
  },
  {
    path:'viewMe',
    component: ViewMeComponent
  },
  {
    path:'viewMyLife',
    component:ViewMyLifeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
