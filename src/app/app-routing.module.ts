import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GraficaComponent } from './grafica/grafica.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'grafica', component: GraficaComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }