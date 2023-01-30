import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-recipes', component: MyRecipesComponent },
  { path: 'explore', component: ExploreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
