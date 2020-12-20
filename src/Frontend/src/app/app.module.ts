import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChallengesComponent } from './challenges/challenges.component';
import { CoachesComponent } from './coaches/coaches.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog'
import { AddChallengeComponent } from './challenges/add-challenge/add-challenge.component';
import { AddCoachComponent } from './coaches/add-coach/add-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    CoachesComponent,
    AddChallengeComponent,
    AddCoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
