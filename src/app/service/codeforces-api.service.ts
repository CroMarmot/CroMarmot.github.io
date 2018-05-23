import { Injectable } from '@angular/core';
import {CfUserRatingItem} from '../cf-user-rating-item';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

const url = 'http://codeforces.com/api/user.rating?handle=';
@Injectable({
  providedIn: 'root'
})
export class CodeforcesApiService {
  private cachedCfUserRatingItem: CfUserRatingItem[] = [];
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUserRating(userName: string): Observable<CfUserRatingItem[]> {
    if ( this.cachedCfUserRatingItem.length !== 0){
      return of(this.cachedCfUserRatingItem);
    }
    return this.http.get<CfUserRatingItem[]>(`${url}${userName}`)
      .pipe(
        map(ret => (ret['status'] === 'OK' ? (this.cachedCfUserRatingItem = ret['result']) : [])),
        catchError(this.handleError('getUserRating', []))
      );
  }

  constructor(
    private http: HttpClient,
  ) { }
}
