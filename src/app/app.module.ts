import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { SideBarService } from './shared/services/sidebar.service';
import { ModalService } from './shared/services/modal.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule,  } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/services/messaging.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    // firebase  modules
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    ScullyLibModule,
  ],
  providers: [
    SideBarService,
    ModalService,
    MessagingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
