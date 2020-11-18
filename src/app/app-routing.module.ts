import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { SecretariaAcademicaComponent } from './pages/secretaria-academica/secretaria-academica.component';
import { RestauranteEscolarComponent } from './pages/restaurante-escolar/restaurante-escolar.component';
import { TransporteEstudiantilComponent } from './pages/transporte-estudiantil/transporte-estudiantil.component';
import { EnlacesComponent } from './pages/enlaces/enlaces.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'secretaria-academica', component: SecretariaAcademicaComponent },
  { path: 'restaurante-escolar', component: RestauranteEscolarComponent },
  { path: 'transporte-estudiantil', component: TransporteEstudiantilComponent },
  { path: 'enlaces-de-interes', component: EnlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
