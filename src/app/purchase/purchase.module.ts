import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { Purchase1Component } from './purchase1/purchase1.component';
import { Purchase2Component } from './purchase2/purchase2.component';
import { Purchase3Component } from './purchase3/purchase3.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    Purchase1Component,
    Purchase2Component,
    Purchase3Component
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
