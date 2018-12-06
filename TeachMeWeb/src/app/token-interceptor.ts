import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConnectedService} from './connected.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  constructor(public connectedService: ConnectedService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.connectedService.connected){
      req = req.clone({
        setHeaders: {
          Authorization: this.connectedService.accountConnected.token
        }
      });


    }
    return next.handle(req);


  }
}
