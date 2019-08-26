import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducerComponent } from './producer/producer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerComponent,
    ListProductComponent,
    SupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
