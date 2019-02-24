import { Injectable } from '@angular/core';
import { Owner } from 'src/app/owners/owner';
import { OWNERS } from 'src/app/mock-owners';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private ownersUrl = 'http://agl-developer-test.azurewebsites.net/people.json';
  constructor( private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
      return this.http.get<Owner[]>(this.ownersUrl) .pipe(
        tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError('getOwners', []))
    );
  }


 // Handle Http operation that failed.
 // Let the app continue.
 // @param operation - name of the operation that failed
 // @param result - optional value to return as the observable result
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // tslint:disable-next-line:no-console
    console.info(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
