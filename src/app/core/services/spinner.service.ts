import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  loading = false;

  loadingText = 'loading';

  constructor() {}
}
