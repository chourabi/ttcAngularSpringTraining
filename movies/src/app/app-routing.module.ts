import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomeComponent  },
  { path:'movie/:id', component:MovieComponent  },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
