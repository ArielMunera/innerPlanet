import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { QuestionComponent } from './question/question.component';

import { QuestionnaryService } from './questionnary.service';
import { PlanetPageComponent } from './planet-page/planet-page.component';
import { StarDataComponent } from './star-data/star-data.component';
import { ExoDataComponent } from './exo-data/exo-data.component';
import { SubscribeButtonComponent } from './subscribe-button/subscribe-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { AnswersService } from './answers.service';
import { HttpModule } from '@angular/http';
import { ExoDescriptionComponent } from './exo-description/exo-description.component';
import { ButtonreachComponent } from './buttonreach/buttonreach.component';

const appRoutes: Routes = [
  { path: 'planet', component: PlanetPageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: '', component: GlobalComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    QuestionComponent,
    PlanetPageComponent,
    StarDataComponent,
    ExoDataComponent,
    SubscribeButtonComponent,
    ContactComponent,
    SubscribeFormComponent,
    ContactFormComponent,
    PlanetViewComponent,
    SocialMediaBarComponent,
    ExoDescriptionComponent,
    ButtonreachComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AppRoutingModule
  ],
  providers: [QuestionnaryService, AnswersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
