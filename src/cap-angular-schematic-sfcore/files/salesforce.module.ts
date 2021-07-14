import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalesforceRoutingModule } from './salesforce-routing.module';
import { SalesforceService } from './salesforce.service';

import { IndexComponent } from './index/index.component';
import { AccountSFComponent } from './account-sf/account-sf.component';
import { ContactSFComponent } from './contact-sf/contact-sf.component';
import { LeadSFComponent } from './lead-sf/lead-sf.component';
import { OpportunitySFComponent } from './opportunity-sf/opportunity-sf.component';
import { HttpClientModule } from '@angular/common/http';
import { CapSalesForceCore } from 'cap-sfcore';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    IndexComponent,
    AccountSFComponent,
    ContactSFComponent,
    LeadSFComponent,
    OpportunitySFComponent
  ],
  imports: [
    CommonModule,
    SalesforceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CapSalesForceCore.forRoot({
      endPoint: environment.sfApiUrl
    })
  ],
  providers: [
    SalesforceService,
    CookieService
  ]
})
export class SalesForceModule {}
