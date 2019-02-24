import { TestBed } from '@angular/core/testing';
import { OwnerService } from './owner.service';
import { of, Observable } from 'rxjs';
import { Owner } from 'src/app/owners/owner';


describe('OwnerService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let ownerService: OwnerService;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    ownerService = new OwnerService(<any> httpClientSpy);
});

  it('get owners', () => {
    const getOwnerResponse: Owner[] = [
      {
        name : 'Bob',
        gender : 'male',
        age : 23,
        pets : [
          { name: 'Garfield', type: 'cat' },
          { name: 'test', type: 'cat' }
        ]
      },
      {
        name : 'Jennifer',
        gender : 'female',
        age : 18,
        pets : [
          { name: 'Garfield', type: 'cat' },
          { name: 'Fido', type: 'Dog' }
        ]
      },
      {
        name : 'Steve',
        gender : 'male',
        age : 18,
        pets : [
          { name: 'Garfield', type: 'cat' },
          { name: 'Fido', type: 'cat' }
        ]}
  ];
    httpClientSpy.get.and.returnValue(getOwnerResponse);
    ownerService.getOwners().subscribe(
      heroes => expect(heroes).toEqual(getOwnerResponse, 'expected owners'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
