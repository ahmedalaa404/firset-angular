import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes =
[
  {path: '', redirectTo:'header',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
