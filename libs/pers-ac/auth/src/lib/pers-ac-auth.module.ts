import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersAcCoreModule } from '@mt/pers-ac/core';
import { LoginComponent } from './containers/login.component';

@NgModule({
  imports: [PersAcCoreModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class PersAcAuthModule {}
