import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindRESTExcel2JsonOrdersService } from './northwind-rest-excel2json-orders.service';

describe('NorthwindRESTExcel2JsonOrdersService', () => {
  let service: NorthwindRESTExcel2JsonOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindRESTExcel2JsonOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
