import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatButtonModule, MatSidenavModule, MatListModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlacesService } from './places.service';
import { RegionsService } from './regions.service';

import { AdminRegionComponent } from './admin-region/admin-region.component';
import { AppComponent } from './app.component';
import { AuthoritativeRegionComponent } from './authoritative-region/authoritative-region.component';
import { CoordinateInputComponent } from './coordinate-input/coordinate-input.component';
import { GeoserveComponent } from './geoserve/geoserve.component';
import { HazdevTemplateComponent } from './hazdev-template/hazdev-template.component';
import { HazdevTemplateHeaderComponent } from './hazdev-template-header/hazdev-template-header.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { LocationOutputComponent } from './location-output/location-output.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';
import { NeicCatalogRegionComponent } from './neic-catalog-region/neic-catalog-region.component';
import { NeicResponseRegionComponent } from './neic-response-region/neic-response-region.component';
import { OffshoreRegionComponent } from './offshore-region/offshore-region.component';
import { TectonicSummaryRegionComponent } from './tectonic-summary-region/tectonic-summary-region.component';
import { TimezoneRegionComponent } from './timezone-region/timezone-region.component';
import { HazdevTemplateNavigationComponent } from './hazdev-template-navigation/hazdev-template-navigation.component';
import { HazdevTemplatePageComponent } from './hazdev-template-page/hazdev-template-page.component';



@NgModule({
  declarations: [
    AdminRegionComponent,
    AppComponent,
    AuthoritativeRegionComponent,
    CoordinateInputComponent,
    GeoserveComponent,
    HazdevTemplateComponent,
    HazdevTemplateHeaderComponent,
    LocationMapComponent,
    LocationOutputComponent,
    NearbyPlacesComponent,
    NeicCatalogRegionComponent,
    NeicResponseRegionComponent,
    OffshoreRegionComponent,
    TectonicSummaryRegionComponent,
    TimezoneRegionComponent,
    HazdevTemplateNavigationComponent,
    HazdevTemplatePageComponent
  ],
  entryComponents: [
    GeoserveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ],
  providers: [
    PlacesService,
    RegionsService,
    MediaMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
