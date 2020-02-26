import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap, retry, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import untils from '../common/untils';
@Injectable({
  providedIn: 'root'
})
export class BaseIntercepterService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // { withCredentials: true }
    const newReq = req.clone({
      // headers: req.headers.set('Authorization', `${environment.productTokenFix} ${this.auth.storage.USER_TOKEN}`),
      url:
        (req.url.indexOf('://') < 0 ? environment.mockPath : '') +
        req.url +
        (req.url.indexOf('?') > -1 ? '&' : '?') +
        'GenNo=' +
        untils().GenNonDuplicateID()
    });

    return next
      .handle(newReq)
      .pipe(
        mergeMap(this.handleResponse),
        retry(environment.productionPromis ? 2 : 0),
        catchError(this.handleError)
      );
  }

  private handleResponse(event) {
    const err = event.body && event.body.error_code;
    if (err) {
      console.log(err);
      alert(err);
      return Observable.create(observer => observer.next({}));
    } else {
      return Observable.create(observer => observer.next(event)); // 请求成功返回响应
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error['status'] === 401) {
        window.location.replace('#login');
      } else {
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
    }
    return throwError('Something bad happened; please try again later.');
  }
}
