import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ManagementCostSharedModule } from 'app/shared/shared.module';
import { ManagementCostCoreModule } from 'app/core/core.module';
import { ManagementCostAppRoutingModule } from './app-routing.module';
import { ManagementCostHomeModule } from './home/home.module';
import { ManagementCostEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ManagementCostSharedModule,
    ManagementCostCoreModule,
    ManagementCostHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ManagementCostEntityModule,
    ManagementCostAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ManagementCostAppModule {}
