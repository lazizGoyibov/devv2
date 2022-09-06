import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section1/section1.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MissionComponent } from './components/mission/mission.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpperBtnComponent } from './components/upper-btn/upper-btn.component';
import { WorkComponent } from './components/work/work.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    Section1Component,
    AboutUsComponent,
    MissionComponent,
    PortfolioComponent,
    TeamComponent,
    ContactsComponent,
    FooterComponent,
    UpperBtnComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
