import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about/:id",
    component: AboutComponent,
    children: [
      {
        path: "company",
        component: AboutCompanyComponent
      },
      {
        path: "me",
        component: AboutMeComponent
      }
    ]
  },
  { // this will handle invalid urls
    path: "**",
    component: NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
