import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { tap } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  return inject(AuthService).isLoggedIn.pipe(
    tap({
      next(isLoggedIn) {
        if (!isLoggedIn) {
          router.navigateByUrl('login');
        }
      },
    })
  );
};
