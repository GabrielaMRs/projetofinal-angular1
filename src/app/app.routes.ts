import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';

export const routes: Routes = [ // Adicione o export aqui
  { path: '', component: LandingPageComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:id', component: SpeciesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
