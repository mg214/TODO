import { Message } from './../interface/message';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgsUrl = 'api/msgs';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getMsg(): Observable<Message[]>{
    return this.http.get<Message[]>(this.msgsUrl)
    .pipe(
      map(res => res.filter(x => x.message[0].content.list.participants.filter(p => p !== 'test1') )),
      catchError(this.handleError<Message[]>('getMsgs', []))
    );
  }

  /** DELETE: delete the msg from the server */
  deleteMsg(msg: Message | number): Observable<Message> {
    const id = typeof msg === 'number' ? msg : msg.message[0].messageId;
    const url = `${this.msgsUrl}/${id}`;
    return this.http.delete<Message>(url, this.httpOptions).pipe(
      catchError(this.handleError<Message>('deleteMsg'))
    );
  }

  /** POST: add a new msg to the server */
  addMsg(msg: Message): Observable<Message> {
    return this.http.post<Message>(this.msgsUrl, msg, this.httpOptions).pipe(
      catchError(this.handleError<Message>('addMsg'))
    );
  }


   /*
    Handle Http operation that failed.
    Let the app continue.
    @param operation - name of the operation that failed
    @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
