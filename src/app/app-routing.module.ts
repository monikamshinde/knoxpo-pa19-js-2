import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'app',component:AppComponent},
{path:'add',component:AddComponent},
{path:'view',component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
