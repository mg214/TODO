import { BrowserModule } from '@angular/platform-browser';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './navbar/menu/menu.component';
import { ListComponent } from './list/list.component';
import { NotificationComponent } from './navbar/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMsgService } from './mock-data/in-memory-msg.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    SharedMaterialModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMsgService, { dataEncapsulation: false }
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
