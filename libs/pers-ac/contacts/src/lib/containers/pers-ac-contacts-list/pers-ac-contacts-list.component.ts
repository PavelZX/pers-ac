import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MtAction } from '@mt/pers-ac/core';
import { PersAcService } from '@mt/api-services';
import { ContactDialogBoxComponent } from '../../components/contact-dialog-box/contact-dialog-box.component';
import { Contact } from '@mt/interfaces';

@Component({
  selector: 'mt-pers-ac-contacts-list',
  templateUrl: './pers-ac-contacts-list.component.html',
  styleUrls: ['./pers-ac-contacts-list.component.scss']
})
export class PersAcContactsListComponent implements OnInit {
  public dataSource$: Observable<Contact[]>;
  private refresh$ = new BehaviorSubject<string>('');

  constructor(
    private readonly dialog: MatDialog,
    private readonly contactService: PersAcService
  ) {}

  ngOnInit(): void {
    this.dataSource$ = this.refresh$.pipe(
      switchMap((term: string) => this.contactService.searchContacts(term)),
      tap(console.log)
    );
  }

  public doAction({ type, payload }: MtAction): void {
    switch (type) {
      case 'search':
        this.refresh$.next(payload);
        break;
      case 'update':
        this.updateContact(payload);
        break;
      case 'delete':
        this.deleteContact(payload);
        break;
      case 'create':
        this.createContact();
        break;
      default:
        console.log('Unhandled event type!');
    }
  }

  private createContact(): void {
    const dialogRef = this.dialog.open(ContactDialogBoxComponent, {
      data: { action: 'create', contact: {} }
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'create'),
        map((result: MtAction) => result.payload),
        mergeMap((createdContact: Contact) =>
          this.contactService.addContact(createdContact)
        ),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }

  private deleteContact(contact: Contact): void {
    const dialogRef = this.dialog.open(ContactDialogBoxComponent, {
      data: { action: 'delete', contact }
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'delete'),
        mergeMap(() => this.contactService.deleteContact(contact.id)),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }

  private updateContact(contact: Contact): void {
    const dialogRef = this.dialog.open(ContactDialogBoxComponent, {
      data: { action: 'edit', contact }
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((result: MtAction) => result && result.type === 'edit'),
        map((result: MtAction) => result.payload),
        mergeMap((updatedContact: Contact) =>
          this.contactService.updateContact(updatedContact)
        ),
        take(1)
      )
      .subscribe(() => this.refresh$.next(''));
  }
}
