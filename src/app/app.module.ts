import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NebularModule } from '../app/nebular/nebular.module';
import { HomeComponent } from './home/home.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNoteComponent } from './add-note/add-note.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component'
import { NbDialogModule, NbDialogRef } from '@nebular/theme';
// import { MiniGrid } from 'minigrid';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailCardComponent,
    AddNoteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NebularModule,
    NbDialogModule,
    ReactiveFormsModule,
    // MiniGrid

  ],
  entryComponents: [AddNoteComponent],
  providers: [{
    provide:NbDialogRef,
    useValue: {
      close: (dialogResult: any) => { }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
