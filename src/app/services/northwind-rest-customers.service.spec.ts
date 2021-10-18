import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindRESTCustomersService } from './northwind-rest-customers.service';

describe('NorthwindRESTCustomersService', () => {
  let service: NorthwindRESTCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindRESTCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
