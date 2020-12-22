import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersAcCoreModule } from '@mt/pers-ac/core';

import { Routes, RouterModule } from '@angular/router';
import { PersAcContactsListComponent } from './containers/pers-ac-contacts-list/pers-ac-contacts-list.component';
import { PersAcGridComponent } from './components/pers-ac-grid/pers-ac-grid.component';
import { PersAcSearchBarComponent } from './components/pers-ac-search-bar/pers-ac-search-bar.component';
import { ContactDialogBoxComponent } from './components/contact-dialog-box/contact-dialog-box.component';

const routes: Routes = [
  {
    path: '',
    component: PersAcContactsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PersAcCoreModule],
  declarations: [
    PersAcContactsListComponent,
    PersAcGridComponent,
    PersAcSearchBarComponent,
    ContactDialogBoxComponent
  ],
  exports: [PersAcContactsListComponent],
  entryComponents: [ContactDialogBoxComponent]
})
export class PersAcContactsModule {}
