// import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs-compat/Observable';

declare module 'rxjs-compat/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

// Observable.prototype.debug = function(message: string) {
//   return this.do(
//     (next) => {
//       if (!environment.production) {
//         console.log(message, next);
//       }
//     },
//     (err) => {
//       if (!environment.production) {
//         console.error('ERROR:', message, err);
//       }
//     },
//     () => {
//       if (!environment.production) {
//         console.log('completed -- ');
//       }
//     }
//   );
// }