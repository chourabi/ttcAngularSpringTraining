import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [
  { path:'', redirectTo:'one', pathMatch:'full' },
  { path:'one', component:PageOneComponent },
  { path:'two/:number', component:PageTwoComponent },
  { path:'three/:number', component:PageThreeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
