import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindRESTExcel2JsonCustomersService } from './northwind-rest-excel2json-customers.service';

describe('NorthwindRESTExcel2JsonCustomersService', () => {
  let service: NorthwindRESTExcel2JsonCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindRESTExcel2JsonCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
