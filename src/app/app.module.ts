// libraries
import { NgModule } from '@angular/core';
import { AppComponent } from './template/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// routing
import { AppRoutingModule } from './app-routing.module';

// template
import { ToolbarComponent } from './template/toolbar/toolbar.component';

// directivas
import { SharedTippyDirectiveModule } from './directives/shared-tippy-directive.module';
import { SharedLazyImgDirectiveModule } from './directives/shared-lazy-img-directive.module';

// pages
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './template/footer/footer.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FloatButtonsComponent } from './template/float-buttons/float-buttons.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SecretariaAcademicaComponent } from './pages/secretaria-academica/secretaria-academica.component';
import { RestauranteEscolarComponent } from './pages/restaurante-escolar/restaurante-escolar.component';
import { TransporteEstudiantilComponent } from './pages/transporte-estudiantil/transporte-estudiantil.component';
import { EnlacesComponent } from './pages/enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent,
    FooterComponent,
    FloatButtonsComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    SecretariaAcademicaComponent,
    RestauranteEscolarComponent,
    TransporteEstudiantilComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedTippyDirectiveModule,
    SharedLazyImgDirectiveModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
