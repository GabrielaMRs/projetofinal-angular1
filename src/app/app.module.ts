import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Importar o módulo de rotas
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesCardComponent } from './components/species-card/species-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SpeciesListComponent,
    SpeciesCardComponent,
    SidebarComponent,
    SpeciesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicionar o módulo de rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
