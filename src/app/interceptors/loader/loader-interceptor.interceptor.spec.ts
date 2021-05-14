import { TestBed } from '@angular/core/testing';

import { LoaderInterceptorInterceptor } from './loader-interceptor.interceptor';

describe('LoaderInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderInterceptorInterceptor = TestBed.inject(LoaderInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
