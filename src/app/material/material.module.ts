import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    
    
  ]
})
export class MaterialModule { }
