import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Contact } from '@mt/interfaces';

interface SearchContactsResults {
  contacts: Contact[];
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersAcService {
  persAcUrl = 'api/pers-ac'; // URL to web api

  constructor(private readonly http: HttpClient) {}

  public searchContacts(term: string = ''): Observable<Contact[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('term', term) } : {};
    return this.http
      .get<SearchContactsResults>(this.persAcUrl, options)
      .pipe(
        map((results: SearchContactsResults) => results.contacts),
        catchError(this.handleError)
      );
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http
      .post<Contact>(this.persAcUrl, contact, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteContact(id: string): Observable<{}> {
    const url = `${this.persAcUrl}/${id}`; // DELETE api/pers-ac/42-5c-...
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.persAcUrl}/${contact.id}`;
    return this.http
      .put<Contact>(url, contact, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful respone code.
      // The response body may contain clues as to what was wrong
      console.log(
        `Backend returned code ${error.status}, body was: ${error.status}`
      );
    }

    // return an observable wuth a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
