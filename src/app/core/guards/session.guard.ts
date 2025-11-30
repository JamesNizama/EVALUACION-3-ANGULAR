import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const checksesion = (): boolean => {
  try {
    const cookieService = inject(CookieService);
    const token = cookieService.check('token');
    return token;
  } catch (error) {
    return false;
  }
};

export const sessionGuard: CanActivateFn = (route, state) => {
  const isValidSesision = checksesion();
  const router = inject(Router);
  if(!isValidSesision){
    router.navigate(['/', 'auth']);
  }
  return checksesion();
};
