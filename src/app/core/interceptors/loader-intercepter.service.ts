import { Injectable } from '@angular/core';
import { SpinnerService } from '../services';
import {tap} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderIntercepterService implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.loading = true;
    return next
      .handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.spinner.loading = false;
          }
        }));
  }
}
