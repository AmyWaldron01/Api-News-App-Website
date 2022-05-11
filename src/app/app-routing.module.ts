import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ukraine',
    loadChildren: () => import('./ukraine/ukraine.module').then( m => m.UkrainePageModule)
  },
  {
    path: 'switch-sports',
    loadChildren: () => import('./switch-sports/switch-sports.module').then( m => m.SwitchSportsPageModule)
  },
  {
    path: 'f1',
    loadChildren: () => import('./f1/f1.module').then( m => m.F1PageModule)
  },
  {
    path: 'f1players',
    loadChildren: () => import('./f1players/f1players.module').then( m => m.F1playersPageModule)
  },
  {
    path: 'tech',
    loadChildren: () => import('./tech/tech.module').then( m => m.TechPageModule)
  },
  {
    path: 'best-tech',
    loadChildren: () => import('./best-tech/best-tech.module').then( m => m.BestTechPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
