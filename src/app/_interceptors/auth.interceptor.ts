import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(AuthService).accessToken;

  const request = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
  });

  return next(request);
};
