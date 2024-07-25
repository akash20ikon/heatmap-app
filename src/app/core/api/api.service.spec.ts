import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [ApiService],
    });
  });

  it('service should be defined', waitForAsync(inject([ApiService], (apiService: ApiService) => {
    expect(apiService).toBeDefined();
  })));

  it(`should issue a request`, waitForAsync(
    inject([HttpClient, HttpTestingController, ApiService], (http: HttpClient, backend: HttpTestingController, apiService: ApiService) => {
      apiService.get('/foo/bar').subscribe();
      backend.expectOne({
        url: '/foo/bar',
        method: 'GET',
      });
    }),
  ));
});
