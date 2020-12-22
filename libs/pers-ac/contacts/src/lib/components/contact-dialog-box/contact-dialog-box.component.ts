import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '@mt/interfaces';

export interface ContactDialogBoxOptions {
  contact?: Contact;
  action: string;
}

@Component({
  selector: 'mt-contact-dialog-box',
  templateUrl: './contact-dialog-box.component.html',
  styleUrls: ['./contact-dialog-box.component.scss']
})
export class ContactDialogBoxComponent {
  public action: string;
  public contact: Contact;

  constructor(
    public dialogRef: MatDialogRef<ContactDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactDialogBoxOptions
  ) {
    this.contact = data.contact;
    this.action = data.action;
  }

  doAction() {
    this.dialogRef.close({ type: this.action, payload: this.contact });
  }

  closeDialog() {
    this.dialogRef.close({ type: 'Cancel' });
  }
}
