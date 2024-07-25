import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeatmapService } from './core/globalRef/provider/heatmap/heatmap.service';
import { ApiService } from './core/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HeatmapComponent } from './heatmap/heatmap.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [
    HeatmapService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
